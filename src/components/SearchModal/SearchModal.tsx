import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"
import Input from "../../UI/Input/Input"
import Divider from "../../UI/Divider/Divider"
import List from "../../UI/List/List"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react"
import useSearchTasks from "../../hooks/useSearchTasks"
import Task from "../Task/Task"

const SearchModal = ({isOpen, onClose}: TypeCustomModal) => {  
  const [searchInputValue, setSearchInputValue] = useState('')
  const searchedTasks = useSearchTasks(searchInputValue);
  
  const searchModalCloseHandler = () => {
    onClose()
    setSearchInputValue('')

  }

  return (
    <Modal isOpen={isOpen} onClose={searchModalCloseHandler}>
      <Input
          varaint="empty" value={searchInputValue} 
          onChange={event => setSearchInputValue(event.target.value)} 
          placeholder="Search" 
          icon={<SearchOutlinedIcon />}
      />
      <Divider className="mt-1 bg-slate-500"/>
      <List gapListItems={false} titleSize={12} title="tasks:" className="mt-3 rounded-lg h-[428px]">
        {searchedTasks.map(searchedTaskData => {          
          return <Task 
                    isButtonAboutTask={false}
                    name={searchedTaskData.name}
                    date={searchedTaskData.date}
                    fromList={searchedTaskData.fromList}
                    isDone={searchedTaskData.isDone}
                    id={searchedTaskData.id}
                    subtasksCount={searchedTaskData.subtasks.length}
                    key={searchedTaskData.id}
                  />
        })}
      </List>
    </Modal>
  )
}

export default SearchModal