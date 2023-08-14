import { useState, KeyboardEvent } from 'react'
import Input from "../../UI/Input/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ITask } from '../../types/interfaces/Interfaces';
import useGetNowActiveList from '../../hooks/useGetNowActiveList';
import DatePickerIcon from '../../UI/DatePickerIcon/DatePickerIcon';

const AddNewTaskInput = () => {
    const {name} = useGetNowActiveList()
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
        console.log(newTaskData);
                     
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
                        <DatePickerIcon 
                            saveSelectedDate={null} 
                            setSaveSelectedDate={(date: string) => setNewTaskData({...newTaskData, date: date})}/>
                    </>
                }
            />
        </>
    );
};

export default AddNewTaskInput;
