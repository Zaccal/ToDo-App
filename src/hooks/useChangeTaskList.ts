import { useCallback } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"

const useChangeTaskList = (isChangeFromListNameTopLevel = true) => {
    const { listsStore, setListsStore } = useLocalStorageContext()

    return useCallback(
        (whereToMove: string, taskId: number, isChangeFromListName = isChangeFromListNameTopLevel, isCopyTask = false, setDate?: string) => {
            const task = listsStore
                .find(listData => listData.tasks.some(taskData => taskData.id === taskId))!
                .tasks.find(taskData => taskData.id === taskId)!

            if (whereToMove === task.fromList) return

            setListsStore(prev =>
                prev.map(listData => {
                    if (listData.tasks.some(taskData => taskData.id === taskId) && listData.name !== whereToMove && isCopyTask) {
                        return {
                            ...listData,
                            tasks: listData.tasks.filter(taskData => taskData.id !== taskId),
                        }
                    }

                    if (!listData.tasks.some(taskData => taskData.id === taskId) && listData.name === whereToMove) {
                        return {
                            ...listData,
                            tasks: [
                                ...listData.tasks,
                                { ...task, fromList: isChangeFromListName ? listData.name : task.fromList, date: setDate ? setDate : task.date },
                            ],
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
