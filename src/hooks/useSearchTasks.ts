import { useMemo } from 'react'
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { IList, ITask } from "../types/interfaces/Interfaces"

const useSearchTasks = (target: string): ITask[] => {
    const {listsStore} = useLocalStorageContext()
    const searchedTasks = useMemo(() => {
        let tasks: ITask[] = []

        tasks = listsStore.reduce((acc: ITask[], listData: IList) => {
            let result = [...acc]
            listData.tasks.forEach(taskData => {
                if (!acc.find(accTaskData => accTaskData.id === taskData.id)) {
                    result = [...result, taskData]    
                }
            })

            return result
        }, [])

        if (!target) return tasks
        
        return tasks.filter(taskData => taskData.name.toLowerCase().includes(target.toLocaleLowerCase()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, listsStore])

    return searchedTasks
}

export default useSearchTasks