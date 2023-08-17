import { useMemo } from 'react'
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../types/interfaces/Interfaces"

const useSearchTasks = (target: string): ITask[] => {
    const {listsStore} = useLocalStorageContext()
    const searchedTasks = useMemo(() => {
        let tasks: ITask[] = []
        listsStore.forEach(listData => {
            tasks = [...tasks, ...listData.tasks]
        })

        if (!target) return tasks

        return tasks.filter(taskData => taskData.name.toLowerCase().includes(target.toLocaleLowerCase()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, listsStore])

    return searchedTasks
}

export default useSearchTasks