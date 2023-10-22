import { useCallback } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../types/interfaces/Interfaces"

const useChangeTaskList = () => {
    const { listsStore, setListsStore } = useLocalStorageContext()

    return useCallback(
        (task: ITask) => {
            setListsStore(
                listsStore.map(listData => {
                    if (listData.tasks.some(taskData => taskData.id === task.id) && listData.name !== task.fromList) {
                        return {
                            ...listData,
                            tasks: listData.tasks.filter(taskData => taskData.id !== task.id),
                        }
                    } else if (!listData.tasks.some(taskData => taskData.id === task.id) && listData.name === task.fromList) {
                        return {
                            ...listData,
                            tasks: [...listData.tasks, task],
                        }
                    }

                    return listData
                })
            )
        },
        [listsStore]
    )
}

export default useChangeTaskList
