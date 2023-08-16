import Checkbox from "../../UI/Checkbox/Checkbox";
import { ITask } from "../../types/interfaces/Interfaces";
import TaskDetails from "../../UI/TaskDetails/TaskDetails";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

type TypeTaskComponent = Omit<ITask, "decriptiton" | "tagsById" | 'fromListById' | 'subtasks'>;

interface ITaskComponent extends TypeTaskComponent {
  setIsDone: () => void;
  subtasksCount: number,
  fromList: string,
}

const Task = ({name, date, fromList, isDone, subtasksCount, id, setIsDone}: ITaskComponent) => {

    return (
        <div className="flex justify-between items-start py-4 text-md font-md border-b-[1px] border-mute">
            <div className="flex items-start">
                <Checkbox className="mt-[6px]" checked={isDone} setCheck={setIsDone} />
                <div className="flex pl-3 flex-col justify-start items-start">
                  <div className={`CheckboxText ${isDone ? "CheckboxChekedText" : ""}`}>
                    <span className="text-sm md:text-[15px]">{name}</span>
                  </div>
                  <TaskDetails className="mt-3 md:mt-[7px]" date={date} subtasksCount={subtasksCount} fromList={fromList} />
                </div>
            </div>
            <div className="cursor-pointer">
              <NavigateNextRoundedIcon className="dark:text-white"/>
            </div>
        </div>
    );
};

export default Task;
