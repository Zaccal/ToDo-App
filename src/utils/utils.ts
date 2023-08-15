import { ITask } from "../types/interfaces/Interfaces";

export const getListTaskDoneCount = (tasks: ITask[]) => {
    let count = 0
    tasks.forEach((taskData) => {
        if (!taskData.isDone) count += 1
    });

    return count
};


export const formatDate = (gotDate: Date | null): string => {
    if (!gotDate) return ''

    const day = gotDate.getDate();
    const month = gotDate.getMonth() + 1;
    const year = gotDate.getFullYear();
    return `${day}-${month}-${year}`;
};