import ClipboardListTitle from "../../components/ClipboardListTitle/ClipboardListTitle"
import Task from "../../components/Task/Task";
import { Input } from "../Sidebar/SidebarImports"
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const Clipboard = () => {
  return (
    <div>
      <ClipboardListTitle className="mb-11"/>
      <Input 
        icon={<AddRoundedIcon />} 
        placeholder="Add New Task" 
        classNameContainer="px-3 h-12"
        className="pl-2"
      />
      <Task name="Research content ideas" date="22-03-22" subtasksCount={1}/>
    </div>
  )
}

export default Clipboard