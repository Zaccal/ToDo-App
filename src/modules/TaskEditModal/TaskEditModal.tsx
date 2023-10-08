import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import { useEffect, useState } from "react"
import { Divider, Input, Modal, Textarea, Checkbox } from "./TaskEditModalUIImports"
import { TypeSelectOption } from "../../UI/Select/Select"
import SelectList from "../../components/SelectList/SelectList"
import SelcetDate from "../../components/SlectDate/SelcetDate"
import TagPicker from "../../components/TagPicker/TagPicker"

const TaskEditModal = () => {
    const { taskForEditData, setTaskForEditData } = useGlobalStateContext()
    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
    })
    const [fromList, setFromList] = useState<TypeSelectOption | null>(null)
    const [date, setDate] = useState<Date | null>(null)
    const [isSetDate, setIsSetDate] = useState(taskForEditData.taskDataToEdit?.date ? true : false || false)

    useEffect(() => {
        setInputValues({
            title: taskForEditData.taskDataToEdit?.name || "",
            description: taskForEditData.taskDataToEdit?.decriptiton || "",
        })
        setIsSetDate(taskForEditData.taskDataToEdit?.date ? true : false || false)
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
                <SelectList saveSelectOption={setFromList} />
            </div>

            <div className="mt-4">
                <label htmlFor="date" className="mt-4">
                    <span className="text-md font-bold pr-5">Date</span>
                    <SelcetDate isDisabled={!isSetDate} saveDate={setDate} />
                </label>
            </div>

            <div className="mt-4 flex items-center gap-5">
                <p className="text-md font-bold">Set date</p>
                <Checkbox checked={isSetDate} setCheck={() => setIsSetDate(!isSetDate)} />
            </div>

            <div className="mt-4 flex flex-col gap-3">
                <p className="text-md font-bold">Tags</p>
                <TagPicker dependency={[taskForEditData.isOpenModal]} defualtTags={taskForEditData.taskDataToEdit.tags} />
            </div>
        </Modal>
    )
}

export default TaskEditModal
