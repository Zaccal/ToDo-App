import { useState, useEffect, KeyboardEvent } from 'react'
import Input from "../../UI/Input/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ITask } from '../../types/interfaces/Interfaces';
import useGetNowActiveList from '../../hooks/useGetNowActiveList';
import DatePickerIcon, { formatDate } from '../../UI/DatePickerIcon/DatePickerIcon';

const AddNewTaskInput = () => {
    const {name} = useGetNowActiveList()
    const [pickedDate, setPickedDate] = useState<Date | null>(null)
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

    useEffect(() => {
        setNewTaskData(prev => {
            return {
                ...prev,
                date: formatDate(pickedDate)
            }
        })
    }, [pickedDate])

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
                        <DatePickerIcon 
                            saveSelectedDate={pickedDate} 
                            setSaveSelectedDate={setPickedDate}/>
                    </>
                }
            />
        </>
    );
};

export default AddNewTaskInput;
