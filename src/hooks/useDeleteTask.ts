import { useCallback, DependencyList } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../types/interfaces/Interfaces"

export type TypeReturnFunctionForDelTask = (taskForDelete: ITask) => void

const useDeleteTask = (callback?: () => void, dependency?: DependencyList): TypeReturnFunctionForDelTask => {
    const { setListsStore, listsStore } = useLocalStorageContext()

    const deleteTaskHandler = useCallback(
        (taskForDelete: ITask) => {
            setListsStore(
                listsStore.map(listData => {
                    if (listData.tasks.some(taskData => taskData.id === taskForDelete.id)) {
                        return {
                            ...listData,
                            tasks: listData.tasks.filter(taskData => taskData.id !== taskForDelete.id),
                        }
                    }

                    return listData
                })
            )

            if (callback) callback()
        },
        [listsStore, dependency]
    )

    return deleteTaskHandler
}

export default useDeleteTask
