import { useState, KeyboardEvent, useEffect } from "react"
import Modal from "../../UI/Modal/Modal"
import { ITask, TypeSubtask } from "../../types/interfaces/Interfaces"
import { TypeSetState } from "../../types/types/types"
import AssignmentRounded from "@mui/icons-material/AssignmentRounded"
import Button from "../../UI/Button/Button"
import CloseRounded from "@mui/icons-material/CloseRounded"
import Divider from "../../UI/Divider/Divider"
import Input from "../../UI/Input/Input"
import List from "../../UI/List/List"
import Subtask from "../Subtask/Subtask"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"

interface IAddSubtaskModal {
    newTaskData: ITask
    setNewTaskData: TypeSetState<ITask> | ((value: ITask) => void)
}

const AddSubtaskIcon = ({ newTaskData, setNewTaskData }: IAddSubtaskModal) => {
    const [isOpen, setIsOpen] = useState(false)
    const [subtaskName, setSubtaskName] = useState("")
    const { listsStore } = useLocalStorageContext()

    const setSubtask = (subtask: TypeSubtask) => {
        setNewTaskData({
            ...newTaskData,
            subtasks: newTaskData.subtasks.map(subtaskData => (subtaskData.id === subtask.id ? subtask : subtaskData)),
        })
    }

    useEffect(() => {
        setNewTaskData({
            ...newTaskData,
            subtasks: [],
        })
    }, [listsStore])

    const addSubtaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && subtaskName.length) {
            setNewTaskData({
                ...newTaskData,
                subtasks: [
                    ...newTaskData.subtasks,
                    {
                        id: Date.now(),
                        isDone: false,
                        name: subtaskName,
                    },
                ],
            })

            setSubtaskName("")
        }
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <AssignmentRounded
                    style={{
                        color: newTaskData.subtasks.length ? "#fac515" : "#717171",
                    }}
                />
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex justify-between items-center">
                    <h1 className="dark:text-white text-lg font-bold">Subtasks</h1>
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
                    {newTaskData.subtasks.length ? (
                        newTaskData.subtasks.map(subtaskData => (
                            <Subtask task={newTaskData} setTask={setNewTaskData} setSubtask={setSubtask} key={subtaskData.id} {...subtaskData} />
                        ))
                    ) : (
                        <p>Subtasks hasn't yet</p>
                    )}
                </List>
            </Modal>
        </>
    )
}

export default AddSubtaskIcon
