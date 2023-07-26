import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"
import Input from "../../UI/Input/Input"
import Divider from "../../UI/Divider/Divider"
import List from "../../UI/List/List"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchModal = ({isOpen, onClose}: TypeCustomModal) => {  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Input varaint="empty" placeholder="Search" icon={<SearchOutlinedIcon />}/>
      <Divider className="mt-1 bg-slate-500"/>
      <List titleSize={12} title="tasks" className="mt-3 rounded-lg h-[428px]">

      </List>
    </Modal>
  )
}

export default SearchModal