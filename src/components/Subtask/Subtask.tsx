import { useCallback } from "react"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import Checkbox from "../../UI/Checkbox/Checkbox"
import { ITask, TypeSubtask } from "../../types/interfaces/Interfaces"
import { TypeSetState } from "../../types/types/types"
import CloseRounded from "@mui/icons-material/CloseRounded"

interface ISubtask extends TypeSubtask {
    isTaskExist?: boolean
    setSubtask?: (subtask: TypeSubtask) => void
    setTask?: TypeSetState<ITask> | ((value: ITask) => void)
    task: ITask
}

const Subtask = ({ isDone, name, id, setSubtask, setTask, task, isTaskExist = false }: ISubtask) => {
    const { listsStore, setListsStore } = useLocalStorageContext()

    const isDoneHandler = useCallback(() => {
        if (!isTaskExist && setSubtask) {
            setSubtask({
                name,
                id,
                isDone: !isDone,
            })
        } else {
            setListsStore(
                listsStore.map(listData => {
                    if (listData.name === task.fromList) {
                        return {
                            ...listData,
                            tasks: listData.tasks.map(taskData => {
                                if (taskData.id === task.id) {
                                    return {
                                        ...taskData,
                                        subtasks: taskData.subtasks.map(subtaskData => {
                                            if (subtaskData.id === id) {
                                                return {
                                                    ...subtaskData,
                                                    isDone: !subtaskData.isDone,
                                                }
                                            }

                                            return subtaskData
                                        }),
                                    }
                                }

                                return taskData
                            }),
                        }
                    }

                    return listData
                })
            )
        }
    }, [listsStore, task])

    const deleteSubtaskHandler = useCallback(() => {
        if (!isTaskExist && setTask) {
            setTask({
                ...task,
                subtasks: task.subtasks.filter(subtaskData => subtaskData.id !== id),
            })
            return
        }

        setListsStore(
            listsStore.map(listData => {
                if (listData.name === task.fromList) {
                    return {
                        ...listData,
                        tasks: listData.tasks.map(taskData => {
                            if (taskData.id === task.id) {
                                return {
                                    ...taskData,
                                    subtasks: taskData.subtasks.filter(subtaskData => subtaskData.id !== id),
                                }
                            }

                            return taskData
                        }),
                    }
                }

                return listData
            })
        )
    }, [listsStore])

    return (
        <div className="border-b pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Checkbox checked={isDone} setCheck={isDoneHandler} />
                <div className={`!mt-0 CheckboxText ${isDone ? "CheckboxChekedText" : ""}`}>
                    <span className="text-sm md:text-[16px]">{name}</span>
                </div>
            </div>
            <button onClick={deleteSubtaskHandler}>
                <CloseRounded className="text-red-500" />
            </button>
        </div>
    )
}

export default Subtask
