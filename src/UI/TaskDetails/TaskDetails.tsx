import EventBusyRoundedIcon from "@mui/icons-material/EventBusyRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import classes from "./TaskDetails.module.css";

interface ITaskDetails {
    date?: string;
    subtasksCount: number;
    fromList?: string;
    defualtListColor?: string;
    className?: string;
}

const TaskDetails = ({date, subtasksCount, fromList, defualtListColor, className}: ITaskDetails) => {
    if (!date && !subtasksCount && !fromList) return     
    console.log(defualtListColor);

    return (
        <div
            className={`${classes.taskDetails} flex ${className || ''} justify-between items-center `}
        >
            {date && (
                <div className="dark:text-white flex items-center text-sm px-3">
                    <EventBusyRoundedIcon style={{width: '23px', height: '23px'}} className="dark:text-gray-500" />
                    <span className="ml-2">{date}</span>
                </div>
            )}
            {subtasksCount > 0 ? (
                <div className="dark:text-white flex items-center text-sm px-3">
                    <div className="bg-mute px-3 py-[1px] dark:bg-gray-500 rounded-lg">
                        {subtasksCount}
                    </div>
                    <span className="ml-2">Subtasks</span>
                </div>
            ) : undefined}
            {fromList ? (
                <div className="dark:text-white flex items-center text-sm px-3">
                    {defualtListColor ? (
                        <div
                            style={{ backgroundColor: defualtListColor }}
                            className="rounded-md w-[17px] h-[17px] mr-3"
                        ></div>
                    ) : (
                        <FormatListBulletedRoundedIcon style={{width: '23px', height: '23px'}} className="mr-1 dark:text-gray-500" />
                    )}
                    <span>{fromList}</span>
                </div>
            ) : undefined}
        </div>
    );
};

export default TaskDetails;
