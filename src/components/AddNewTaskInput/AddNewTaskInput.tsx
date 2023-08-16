import { useState, useEffect, KeyboardEvent } from 'react'
import Input from "../../UI/Input/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ITag, ITask } from '../../types/interfaces/Interfaces';
import useGetNowActiveList from '../../hooks/useGetNowActiveList';
import DatePickerIcon from '../../UI/DatePickerIcon/DatePickerIcon';
import { formatDate } from '../../utils/utils';
import TagPicker from '../TagPicker/TagPicker';
import { useLocalStorageContext } from '../../Providers/LocalStorageProvider/LocalStorageProvider';

const AddNewTaskInput = () => {
    const {name} = useGetNowActiveList()
    const [pickedDate, setPickedDate] = useState<Date | null>(null)
    const [newTaskData, setNewTaskData] = useState<ITask>({
        name: '',
        decriptiton: '',
        date: '',
        fromList: name,
        id: 0,
        isDone: false,
        subtasks: [],
        tags: []
    })
    const {listsStore, setListsStore} = useLocalStorageContext()
    const nowActiveList = useGetNowActiveList()

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
        if (event.key === 'Enter' && event.currentTarget.value.length) {  
            setNewTaskData({...newTaskData, name: ''})
            
            setListsStore(listsStore.map(listData => {
                if (listData.id === nowActiveList.id) {
                    return {
                        ...listData,
                        tasks: [...listData.tasks, {...newTaskData, id: Date.now()}]
                    }
                }
    
                return listData
            }))            
        }
    }

    return (
        <>
            <Input
                icon={<AddRoundedIcon />}
                value={newTaskData.name}
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
