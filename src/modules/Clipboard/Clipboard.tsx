import ClipboardListTitle from "../../components/ClipboardListTitle/ClipboardListTitle"
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
      />
      
    </div>
  )
}

export default Clipboard