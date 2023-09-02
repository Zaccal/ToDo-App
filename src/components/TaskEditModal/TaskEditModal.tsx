import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import Divider from "../../UI/Divider/Divider"
import Input from "../../UI/Input/Input"
import Modal from "../../UI/Modal/Modal"
import Textarea from "../../UI/Textarea/Textarea"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import Select, { TypeSelectOption } from "../../UI/Select/Select"
import { useEffect, useState } from "react"

const TaskEditModal = () => {
  const {taskEditModalData, setTaskEditModalData} = useGlobalStateContext()
  const {listsStore} = useLocalStorageContext()  
  const [currentSlectedOptionsList, setCurrentSlectedOptionsList] = useState<TypeSelectOption>({
    label: '',
    value: '',
  }) 
  const optionsFromList = listsStore.map(listData => ({
    label: listData.name,
    value: listData.name.toLocaleLowerCase()
  }))

  const changeSelectOptionHandler = (value: TypeSelectOption) => setCurrentSlectedOptionsList(value)

  useEffect(() => {
    if (taskEditModalData.taskDataToEdit) {
      setCurrentSlectedOptionsList({
        label: taskEditModalData.taskDataToEdit.fromList,
        value: taskEditModalData.taskDataToEdit.fromList.toLocaleLowerCase()
      })
    }
  }, [taskEditModalData])
  

  if (!taskEditModalData.taskDataToEdit) return <></>

  return (
    <Modal isOpen={taskEditModalData.isOpenModal} onClose={() => setTaskEditModalData(prev => ({...prev, isOpenModal: false}))}>
      <h1 className="text-xl font-bold">Task:</h1>
      <Divider className="my-3"/>
      <Input classNameContainer="h-12" placeholder="Renew driver's license" />
      <Textarea className="mt-4" placeholder="Description"/>
      <div className="flex items-center gap-5 mt-4">
        <p className="text-md font-bold">List</p>
        <Select className=" " onChange={changeSelectOptionHandler} value={currentSlectedOptionsList} options={optionsFromList} />
      </div>
    </Modal>
  )
}

export default TaskEditModal