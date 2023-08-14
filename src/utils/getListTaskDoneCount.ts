import { ITask } from "../types/interfaces/Interfaces";

export const getListTaskDoneCount = (tasks: ITask[]) => {
    let count = 0
    tasks.forEach((taskData) => {
        if (!taskData.isDone) count += 1
    });

    return count
};
