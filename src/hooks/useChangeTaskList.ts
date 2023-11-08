import { useCallback } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../types/interfaces/Interfaces"

const useChangeTaskList = () => {
    const { listsStore, setListsStore } = useLocalStorageContext()

    return useCallback(
        (whereToMove: string, taskId: number) => {
            const task = listsStore
                .find(listData => listData.tasks.some(taskData => taskData.id === taskId))!
                .tasks.find(taskData => taskData.id === taskId)!

            if (whereToMove === task.fromList) return

            setListsStore(prev =>
                prev.map(listData => {
                    if (listData.tasks.some(taskData => taskData.id === taskId) && listData.name !== whereToMove) {
                        return {
                            ...listData,
                            tasks: listData.tasks.filter(taskData => taskData.id !== taskId),
                        }
                    }

                    if (!listData.tasks.some(taskData => taskData.id === taskId) && listData.name === whereToMove) {
                        return {
                            ...listData,
                            tasks: [...listData.tasks, { ...task, fromList: listData.name }],
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
