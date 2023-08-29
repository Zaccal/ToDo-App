import { ReactElement, useEffect, useState } from "react";
import { getTypeCategorySortTask } from "../../utils/utils";
import { useLocalStorageContext } from "../LocalStorageProvider/LocalStorageProvider";

interface ITaskManagingProvider {
    children: ReactElement;
}

const TaskManagingProvider = ({ children }: ITaskManagingProvider) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const {listsStore, setListsStore} = useLocalStorageContext()

    useEffect(() => {
        const intervalId = setInterval(() => {            
            const newDate = new Date();
            if (newDate.getDate() !== currentDate.getDate()) {                
                setCurrentDate(newDate);
                const newListStore = [
                    ...listsStore.slice(0, 2).map(listData => {
                        if (listData.name === 'Upcoming') {
                            return {
                                ...listData,
                                tasks: listData.tasks.filter(taskData => {                                
                                    if (getTypeCategorySortTask(taskData) === 'Upcoming' || taskData.fromList === 'Upcoming') {
                                        return true
                                    }
                                })
                            }
                        }
        
                        return {
                            ...listData,
                            tasks: listData.tasks.filter(taskData => {
                                if (getTypeCategorySortTask(taskData) === 'Today' || taskData.fromList === 'Today') {
                                    return true
                                }
                            })
                        }
        
                    }), 
                    ...listsStore.slice(2)
                ]
    
                setListsStore(newListStore)
          }
        }, 60000); 
      
        return () => {
          clearInterval(intervalId);
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentDate]); 
      

    return <>{children}</>;
};

export default TaskManagingProvider;
