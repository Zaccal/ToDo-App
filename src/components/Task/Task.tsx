import { useState } from "react";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { ITask } from "../../types/interfaces/Interfaces";
import { TypeSetState } from "../../types/types/types";
import TaskDetails from "../../UI/TaskDetails/TaskDetails";

type TypeTaskComponent = Omit<ITask, "decriptiton" | "tagsById" | 'fromListById' | 'subtasks'>;

interface ITaskComponent extends TypeTaskComponent {
  setIsDone: TypeSetState<boolean>;
  subtasksCount: number,
  fromList: string,
}

const Task = ({name, date, fromList, isDone, subtasksCount, id, setIsDone}: ITaskComponent) => {
    const [checkboxStatus, setCheckboxStatus] = useState(false);

    return (
        <div className="flex justify-between items-center py-3 text-md font-md border-b-[1px] border-mute">
            <div className="flex items-start">
                <Checkbox
                    className="mr-3 mt-1"
                    checked={checkboxStatus}
                    setCheck={() => setCheckboxStatus(!checkboxStatus)}
                />
                <div className="flex flex-col justify-start items-start">
                  <div className={`CheckboxText ${checkboxStatus ? "CheckboxChekedText" : ""}`}>
                    <span className="block">{name}</span>
                  </div>
                  <TaskDetails className="mt-[10px]" date={date} subtasksCount={subtasksCount} fromList={fromList} />
                </div>
            </div>
        </div>
    );
};

export default Task;
