import { ITask } from "../types/interfaces/Interfaces"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"

type TypeEditDataFn = (taskDefualt: ITask) => ITask
type TypeFunction = (editTaskId: number) => void

const useEditTaskSettings = (editDataFn: TypeEditDataFn, callback?: () => void): TypeFunction => {
    const { listsStore, setListsStore } = useLocalStorageContext()

    return (editTaskId: number) => {
        setListsStore(
            listsStore.map(listData => {
                if (listData.tasks.some(taskData => taskData.id === editTaskId)) {
                    return {
                        ...listData,
                        tasks: listData.tasks.map(taskData => {
                            if (taskData.id === editTaskId) {
                                return editDataFn(taskData)
                            }

                            return taskData
                        }),
                    }
                }

                return listData
            })
        )

        if (callback) callback()
    }
}

export default useEditTaskSettings
