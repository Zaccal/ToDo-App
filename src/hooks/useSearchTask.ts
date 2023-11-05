import { useMemo } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../types/interfaces/Interfaces"

export interface ITaskData {
    fromList: string
    id: number
}

export default function useSearchTask({ fromList, id }: ITaskData): ITask | undefined {
    const { listsStore } = useLocalStorageContext()

    return useMemo(() => {
        return listsStore.find(listData => listData.name === fromList)?.tasks.find(taskData => taskData.id === id)
    }, [listsStore])
}
