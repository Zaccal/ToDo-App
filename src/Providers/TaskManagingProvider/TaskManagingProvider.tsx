import { ReactElement, useEffect, useState } from "react"
import useManagingTasks from "../../hooks/useManagingTasks"

interface ITaskManagingProvider {
    children: ReactElement
}

const TaskManagingProvider = ({ children }: ITaskManagingProvider) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const managTask = useManagingTasks()

    useEffect(() => {
        managTask()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date()
            if (newDate.getMinutes() !== currentDate.getMinutes()) {
                setCurrentDate(newDate)
                managTask()
            }
        }, 500)

        return () => {
            clearInterval(intervalId)
        }
    }, [currentDate])

    return <>{children}</>
}

export default TaskManagingProvider
