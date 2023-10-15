import List from "../../UI/List/List";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import Task from "../Task/Task";

const TasksListRender = () => {
    const {tasks} = useGetNowActiveList()
    
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
                        taskFullDate={taskData}
                    />
                );
            })}
        </List>
    );
};

export default TasksListRender;
