import { useCallback } from "react"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import { getTypeCategorySortTask } from "../utils/utils"
import useChangeTaskList from "./useChangeTaskList"

const useManagingTasks = () => {
    const { listsStore } = useLocalStorageContext()
    const changeTaskList = useChangeTaskList(false)

    return useCallback(() => {
        listsStore.forEach(listData => {
            const taskToday = listData.tasks.filter(taskData => getTypeCategorySortTask(taskData) === "Today")

            taskToday.forEach(taskData => {
                changeTaskList("Today", taskData.id)
            })

            const taskUpcoming = listData.tasks.filter(taskData => getTypeCategorySortTask(taskData) === "Upcoming")

            taskUpcoming.forEach(taskData => {
                changeTaskList("Upcoming", taskData.id)
            })
        })
    }, [listsStore])
}

export default useManagingTasks
