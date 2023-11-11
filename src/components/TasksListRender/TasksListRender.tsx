import List from "../../UI/List/List"
import useGetNowActiveList from "../../hooks/useGetNowActiveList"
import Task from "../Task/Task"

const TasksListRender = () => {
    const { tasks } = useGetNowActiveList()

    return (
        <>
            <List gapListItems={false}>
                {tasks.map(taskData => {
                    return <Task key={taskData.id} {...taskData} taskFullDate={taskData} subtasksCount={taskData.subtasks.length} />
                })}
            </List>
        </>
    )
}

export default TasksListRender
