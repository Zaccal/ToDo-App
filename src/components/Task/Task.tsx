import { ReactElement } from 'react'
import Checkbox from "../../UI/Checkbox/Checkbox";
import { ITask } from "../../types/interfaces/Interfaces";
import TaskDetails from "../../UI/TaskDetails/TaskDetails";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";

type TypeTaskComponent = Omit<ITask, "decriptiton" | 'subtasks' | 'tags' | 'name'>;

interface ITaskComponent extends TypeTaskComponent {
  subtasksCount: number,
  fromList: string,
  isButtonAboutTask?: boolean, 
  name: string
}

const Task = ({name, date, fromList, isDone, subtasksCount, id, isButtonAboutTask = true}: ITaskComponent) => {
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
    const findDefualtColor = (listName: string): string => {
      let result = ''
      
      listsStore.forEach(listData => {
        if (listData.name === listName && listData.defualtIconColor) {
          result = listData.defualtIconColor 
        }
      })

      return result
    }

    return (
        <div className="flex justify-between items-start py-4 text-md font-md border-b-[1px] border-mute">
            <div className="flex items-start">
                <Checkbox checked={isDone} setCheck={isDoneHandler} />
                <div className="flex pl-3 flex-col justify-start items-start">
                  <div className={`CheckboxText ${isDone ? "CheckboxChekedText" : ""}`}>
                    <span className="text-sm md:text-[16px]">{name}</span>
                  </div>
                  <TaskDetails className="mt-[8px]" defualtListColor={findDefualtColor(fromList)} date={date} subtasksCount={subtasksCount} fromList={nowActiveList.name === fromList ? undefined : fromList} />
                </div>
            </div>
            {isButtonAboutTask && (
              <div className="cursor-pointer">
                <NavigateNextRoundedIcon className="dark:text-white"/>
              </div>
            )}
        </div>
    );
};

export default Task;
