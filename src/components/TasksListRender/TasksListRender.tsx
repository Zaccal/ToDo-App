import { useCallback } from 'react'
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import List from "../../UI/List/List";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import Task from "../Task/Task";

const TasksListRender = () => {
    const {tasks, id} = useGetNowActiveList()
    const {setListsStore, listsStore} = useLocalStorageContext()
    const setIsDoneHandler = useCallback((taskIdForEdit: number) => {
        setListsStore(listsStore.map(listData => {
            if (listData.id === id) {
                return {
                    ...listData,
                    tasks: tasks.map(taskData => {
                        if (taskData.id === taskIdForEdit) {
                            return {
                                ...taskData,
                                isDone: !taskData.isDone
                            }
                        }

                        return taskData
                    })
                }
            }

            return listData
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]) 

    return (
        <List>
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
                        setIsDone={() => setIsDoneHandler(taskData.id)}
                    />
                );
            })}
        </List>
    );
};

export default TasksListRender;
