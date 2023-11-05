import AssignmentRounded from "@mui/icons-material/AssignmentRounded"
import useSearchTask, { ITaskData } from "../../hooks/useSearchTask"
import { useState, KeyboardEvent } from "react"
import Modal from "../../UI/Modal/Modal"
import Divider from "../../UI/Divider/Divider"
import Input from "../../UI/Input/Input"
import List from "../../UI/List/List"
import Subtask from "../Subtask/Subtask"
import Button from "../../UI/Button/Button"
import CloseRounded from "@mui/icons-material/CloseRounded"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"

interface IEditSubtaskIcon {
    taskDate: ITaskData
    title?: string
}

const EditSubtaskIcon = ({ taskDate, title = "Subtask" }: IEditSubtaskIcon) => {
    const task = useSearchTask(taskDate)
    const { listsStore, setListsStore } = useLocalStorageContext()
    const [isOpen, setIsOpen] = useState(false)
    const [subtaskName, setSubtaskName] = useState("")

    const addSubtaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && subtaskName) {
            setListsStore(
                listsStore.map(listData => {
                    if (listData.name === taskDate.fromList) {
                        return {
                            ...listData,
                            tasks: listData.tasks.map(taskDataList => {
                                if (taskDataList.id === taskDate.id) {
                                    return {
                                        ...taskDataList,
                                        subtasks: [
                                            ...taskDataList.subtasks,
                                            {
                                                id: Date.now(),
                                                isDone: false,
                                                name: subtaskName,
                                            },
                                        ],
                                    }
                                }

                                return taskDataList
                            }),
                        }
                    }

                    return listData
                })
            )

            setSubtaskName("")
        }
    }

    if (task) {
        return (
            <>
                <button onClick={() => setIsOpen(true)}>
                    <AssignmentRounded
                        className="dark:text-white"
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                    />
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="flex justify-between items-center">
                        <h1 className="dark:text-white text-lg font-bold">{title ? title : "Subtasks"}</h1>
                        <Button onClick={() => setIsOpen(false)} className="w-8 h-8" variant="outline" icon={<CloseRounded />}></Button>
                    </div>
                    <Divider className="my-4" />
                    <Input
                        onKeyUp={addSubtaskHandler}
                        value={subtaskName}
                        onChange={event => setSubtaskName(event.target.value)}
                        classNameContainer="mb-4"
                        placeholder="New subtasks..."
                    />
                    <List title="Subtasks:">
                        {task.subtasks.length ? (
                            task.subtasks.map(subtaskData => <Subtask isTaskExist task={task} key={subtaskData.id} {...subtaskData} />)
                        ) : (
                            <p>Subtasks hasn't yet</p>
                        )}
                    </List>
                </Modal>
            </>
        )
    }

    return <></>
}

export default EditSubtaskIcon
