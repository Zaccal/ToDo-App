import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import { useEffect, useState } from "react"
import { Divider, Input, Modal, Textarea, Checkbox } from "./TaskEditModalUIImports"
import { TypeSelectOption } from "../../UI/Select/Select"
import SelectList from "../../components/SelectList/SelectList"
import SelcetDate from "../../components/SlectDate/SelcetDate"
import TagPicker from "../../components/TagPicker/TagPicker"
import { ITag } from "../../types/interfaces/Interfaces"
import { Button } from "../Sidebar/SidebarImports"
import { formatDate } from "../../utils/utils"
import Alert from "../../components/Alert/Alert"
import useDeleteTask from "../../hooks/useDeleteTask"
import useEditTaskSettings from "../../hooks/useEditSettings"

const TaskEditModal = () => {
    const { taskForEditData, setTaskForEditData } = useGlobalStateContext()
    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
    })
    const [fromListEdited, setFromListEdited] = useState<TypeSelectOption | null>(null)
    const [dateEdited, setDateEdited] = useState<Date | null>(null)
    const [isSetDate, setIsSetDate] = useState(taskForEditData.taskDataToEdit?.date ? true : false)
    const [pickedTags, setPickedTags] = useState<ITag[]>([])

    useEffect(() => {
        setInputValues({
            title: taskForEditData.taskDataToEdit?.name || "",
            description: taskForEditData.taskDataToEdit?.decriptiton || "",
        })
        setIsSetDate(taskForEditData.taskDataToEdit?.date ? true : false)
    }, [taskForEditData])

    const saveSettingsHandler = useEditTaskSettings(
        taskData => {
            return {
                ...taskData,
                tags: pickedTags,
                fromList: fromListEdited?.label || taskData.fromList,
                date: isSetDate ? formatDate(dateEdited) || taskData.date : "",
                decriptiton: inputValues.description,
                name: inputValues.title,
            }
        },
        () => {
            setTaskForEditData(prev => ({ ...prev, isOpenModal: false }))
        }
    )

    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const deleteTaskHandler = useDeleteTask(() => {
        setIsOpenAlert(false)
        setTaskForEditData(prev => ({ ...prev, isOpenModal: false }))
    }, [taskForEditData])

    if (!taskForEditData.taskDataToEdit) return <></>

    return (
        <Modal isOpen={taskForEditData.isOpenModal} onClose={() => setTaskForEditData(prev => ({ ...prev, isOpenModal: false }))}>
            <h1 className="dark:text-white text-xl font-bold">Task:</h1>
            <Divider className="my-3" />
            <Input
                classNameContainer="h-12"
                onChange={event =>
                    setInputValues({
                        ...inputValues,
                        title: event.target.value,
                    })
                }
                value={inputValues.title}
                placeholder="Renew driver's license"
            />
            <Textarea
                className="mt-4"
                onChange={event =>
                    setInputValues({
                        ...inputValues,
                        description: event.target.value,
                    })
                }
                value={inputValues.description}
                placeholder="Description"
            />

            <div className="flex items-center gap-5 mt-4">
                <p className="text-md font-bold">List</p>
                <SelectList saveSelectOption={setFromListEdited} />
            </div>

            <div className="mt-4">
                <label htmlFor="date" className="mt-4">
                    <span className="text-md font-bold pr-5">Date</span>
                    <SelcetDate isDisabled={!isSetDate} saveDate={setDateEdited} />
                </label>
            </div>

            <div className="mt-4 flex items-center gap-5">
                <p className="text-md font-bold">Set date</p>
                <Checkbox checked={isSetDate} setCheck={() => setIsSetDate(!isSetDate)} />
            </div>

            <div className="mt-4 flex flex-col gap-3">
                <p className="text-md font-bold">Tags</p>
                <TagPicker saveOn={setPickedTags} dependency={[taskForEditData.isOpenModal]} defualtTags={taskForEditData.taskDataToEdit.tags} />
            </div>

            <div className="flex mt-5">
                <Button onClick={() => saveSettingsHandler(taskForEditData.taskDataToEdit!.id)} className="mr-2" variant="contained">
                    Save
                </Button>
                <Button onClick={() => setIsOpenAlert(true)} className="bg-red-500 text-white" variant="contained">
                    Delete
                </Button>
            </div>
            <Alert
                subtitle={`"${taskForEditData.taskDataToEdit.name}" will be permanently deleted`}
                onYes={{
                    text: "Delete",
                    event: () => deleteTaskHandler(taskForEditData.taskDataToEdit!),
                }}
                onNo={{ text: "Cancel" }}
                title="Are you sure?"
                isOpen={isOpenAlert}
                onClose={() => setIsOpenAlert(false)}
            />
        </Modal>
    )
}

export default TaskEditModal
