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

const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
};

export const darkenColor = (color: string, factor: number) => {
    const [r, g, b] = hexToRgb(color);
    const darkerR = Math.max(0, r - factor);
    const darkerG = Math.max(0, g - factor);
    const darkerB = Math.max(0, b - factor);
    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
};