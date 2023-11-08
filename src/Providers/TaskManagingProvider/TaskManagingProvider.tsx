import { ReactElement, useEffect, useState } from "react"
import { getTypeCategorySortTask } from "../../utils/utils"
import { useLocalStorageContext } from "../LocalStorageProvider/LocalStorageProvider"
import { ITask } from "../../types/interfaces/Interfaces"

interface ITaskManagingProvider {
    children: ReactElement
}

const TaskManagingProvider = ({ children }: ITaskManagingProvider) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const { listsStore, setListsStore } = useLocalStorageContext()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date()
            if (newDate.getMinutes() !== currentDate.getMinutes()) {
                setCurrentDate(newDate)
                /**
                 * Here write algorithm for change tasks if date be raven to date today
                 * change task to list "Today" or if type is "Upcoming" just change
                 * list to "Upcoimg" (Idea: you can use hook "useChangeTaskList.ts")
                 */
            }
        }, 500)

        return () => {
            clearInterval(intervalId)
        }
    }, [currentDate])

    return <>{children}</>
}

export default TaskManagingProvider
