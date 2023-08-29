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

    const day = gotDate.getDate() < 9 ? `0${gotDate.getDate()}` : gotDate.getDate();
    const month = (gotDate.getMonth() + 1) < 9 ? `0${gotDate.getMonth() + 1}` : gotDate.getMonth() + 1;
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

type TypeGetTypeCategorySortTask = 'Upcoming' | 'Today' | 'any'

export const getTypeCategorySortTask = (task: ITask): TypeGetTypeCategorySortTask => {
    const isMonthSameNowMonth = Number(task.date.split('-')[1]) === new Date().getMonth() + 1                        
    const isDaySomeNowDay = Number(task.date.split('-')[0]) === new Date().getDate()       
    const isDaySoon = Number(task.date.split('-')[0]) === new Date().getDate() + 1     

    if (isDaySoon && isMonthSameNowMonth) return 'Upcoming'
    if (isDaySomeNowDay && isMonthSameNowMonth) return 'Today'

    return 'any'
} 