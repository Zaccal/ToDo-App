import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import Task from "../Task/Task";

const TasksListRender = () => {
    const {tasks} = useGetNowActiveList()

    return (
        <div>
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
        </div>
    );
};

export default TasksListRender;
