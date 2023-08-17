import List from "../../UI/List/List";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import Task from "../Task/Task";

// TODO: Special rendering for lists: Upcoming, Today, Calendar
// TODO: Upcoming: task which date is lesst in one day then in task
// TODO: Today: task which date is now date and also task from today without date
// TODO: Calendar: tasks with date
const TasksListRender = () => {
    const {tasks, name} = useGetNowActiveList()
    
    // Upcoming tasks rendering
    if (name === 'Upcoming') {
        return (
            <List gapListItems={false}>
                {tasks.map(taskData => {
                })}
            </List>    
        )
    }

    return (
        <List gapListItems={false}>
            {tasks.map(taskData => {
                return (
                    <Task
                        id={taskData.id}
                        subtasksCount={taskData.subtasks.length}
                        key={taskData.id}
                        name={taskData.name}
                        isDone={taskData.isDone}
                        date={taskData.date}
                        fromList={taskData.fromList}
                    />
                );
            })}
        </List>
    );
};

export default TasksListRender;
