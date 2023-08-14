import AddNewTaskInput from "../../components/AddNewTaskInput/AddNewTaskInput";
import ClipboardListTitle from "../../components/ClipboardListTitle/ClipboardListTitle"
import TasksListRender from "../../components/TasksListRender/TasksListRender";

const Clipboard = () => {  
  return (
    <div>
      <ClipboardListTitle className="mb-11"/>
      <AddNewTaskInput />
      <TasksListRender />
    </div>
  )
}

export default Clipboard