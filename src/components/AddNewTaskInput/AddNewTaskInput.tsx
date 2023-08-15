import { useState, useEffect, KeyboardEvent } from 'react'
import Input from "../../UI/Input/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ITag, ITask } from '../../types/interfaces/Interfaces';
import useGetNowActiveList from '../../hooks/useGetNowActiveList';
import DatePickerIcon from '../../UI/DatePickerIcon/DatePickerIcon';
import { formatDate } from '../../utils/utils';
import TagPicker from '../TagPicker/TagPicker';

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
        tags: []
    })

    useEffect(() => {
        setNewTaskData(prev => {
            return {
                ...prev,
                date: formatDate(pickedDate)
            }
        })
    }, [pickedDate])

    const pickTagHandler = (newValue: ITag[]) => {
        setNewTaskData({...newTaskData, tags: newValue})
    }

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
                    <div className='flex'>
                        <TagPicker setPickedTags={pickTagHandler} pickedTags={newTaskData.tags} className='mr-2'/>
                        <DatePickerIcon 
                            saveSelectedDate={pickedDate} 
                            setSaveSelectedDate={setPickedDate}/>
                    </div>
                }
            />
        </>
    );
};

export default AddNewTaskInput;
