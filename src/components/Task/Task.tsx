import Checkbox from "../../UI/Checkbox/Checkbox";
import { ITask } from "../../types/interfaces/Interfaces";
import TaskDetails from "../../UI/TaskDetails/TaskDetails";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";

type TypeTaskComponent = Omit<ITask, "decriptiton" | 'subtasks' | 'tags'>;

interface ITaskComponent extends TypeTaskComponent {
  subtasksCount: number,
  fromList: string,
}

const Task = ({name, date, fromList, isDone, subtasksCount, id}: ITaskComponent) => {
    const nowActiveList = useGetNowActiveList()
    const {setListsStore, listsStore} = useLocalStorageContext() 
    const isDoneHandler = () => {
      setListsStore(listsStore.map(listData => {
        if (listData.id === nowActiveList.id) {
          return {
            ...listData,
            tasks: listData.tasks.map(taskData => {
              if (taskData.id === id) {
                return {...taskData, isDone: !taskData.isDone}
              }

              return taskData
            })
          }
        }

        return listData
      }))
    }

    return (
        <div className="flex justify-between items-start py-4 text-md font-md border-b-[1px] border-mute">
            <div className="flex items-start">
                <Checkbox checked={isDone} setCheck={isDoneHandler} />
                <div className="flex pl-3 flex-col justify-start items-start">
                  <div className={`CheckboxText ${isDone ? "CheckboxChekedText" : ""}`}>
                    <span className="text-sm md:text-[16px]">{name}</span>
                  </div>
                  <TaskDetails className="mt-2" defualtListColor={nowActiveList.defualtIconColor} date={date} subtasksCount={subtasksCount} fromList={fromList} />
                </div>
            </div>
            <div className="cursor-pointer">
              <NavigateNextRoundedIcon className="dark:text-white"/>
            </div>
        </div>
    );
};

export default Task;
