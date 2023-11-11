import { ReactElement, useEffect, useState } from "react"
import { getTypeCategorySortTask } from "../../utils/utils"
import { useLocalStorageContext } from "../LocalStorageProvider/LocalStorageProvider"
import useChangeTaskList from "../../hooks/useChangeTaskList"

interface ITaskManagingProvider {
    children: ReactElement
}

const TaskManagingProvider = ({ children }: ITaskManagingProvider) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const { listsStore } = useLocalStorageContext()
    const changeTaskList = useChangeTaskList(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date()
            if (newDate.getMinutes() !== currentDate.getMinutes()) {
                setCurrentDate(newDate)
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
            }
        }, 500)

        return () => {
            clearInterval(intervalId)
        }
    }, [currentDate])

    return <>{children}</>
}

export default TaskManagingProvider
