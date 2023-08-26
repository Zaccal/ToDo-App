import AddNewTaskInput from "../../components/AddNewTaskInput/AddNewTaskInput";
import ClipboardListTitle from "../../components/ClipboardListTitle/ClipboardListTitle"
import TasksListRender from "../../components/TasksListRender/TasksListRender";

const Clipboard = () => {  
  return (
    <div className="px-3 py-5 lg:px-0 lg:py-0">
      <ClipboardListTitle className="mb-11"/>
      <AddNewTaskInput />
      <TasksListRender />
    </div>
  )
}

export default Clipboard