import { useState, KeyboardEvent } from 'react'
import Input from "../../UI/Input/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { ITask } from '../../types/interfaces/Interfaces';
import useGetNowActiveList from '../../hooks/useGetNowActiveList';

const AddNewTaskInput = () => {
    const {name, id} = useGetNowActiveList()

    const [newTaskData, setNewTaskData] = useState<ITask>({
        name: '',
        decriptiton: '',
        date: '',
        fromList: name,
        id: Date.now(),
        isDone: false,
        subtasks: [],
        tagsById: []
    })

    const addNewTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            return
        }
    }

    return (
        <>
            <Input
                icon={<AddRoundedIcon />}
                onChange={event => setNewTaskData({...newTaskData, name: event.target.value})}
                onKeyUp={event => addNewTaskHandler(event)}
                placeholder="Add New Task"
                classNameContainer="px-3 h-12"
                className="pl-2"
                subheader={
                    <>
                        <TodayRoundedIcon className='dark:text-gray-500'/>
                    </>
                }
            />
        </>
    );
};

export default AddNewTaskInput;
