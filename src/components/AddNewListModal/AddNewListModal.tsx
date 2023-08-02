import { useState, useEffect } from "react"
import Color from "../../UI/Color/Color"
import Input from "../../UI/Input/Input"
import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"
import defualtColorsDatas from "../AddTagModal/DefualtColors"
import Button from "../../UI/Button/Button"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import { EnumIconName } from "../../types/enums/enums"
import { IList } from "../../types/interfaces/Interfaces"

const AddNewListModal = ({isOpen, onClose}: TypeCustomModal) => {
  const [colorsSelectDatas, setColorsSelectDatas] = useState(defualtColorsDatas)
  const [selectedColorData, setSelectedData] = useState('')
  const [newListName, setNewListName] = useState('')
  const {listsStore, setListsStore} = useLocalStorageContext()

  const addNewListHandler = () => {
    setNewListName('')

    setListsStore(listsStore.map(listData => {
      return {...listData, active: false}
    }))

    const newList: IList = {
      name: newListName,
      icon: EnumIconName.defualtIcon,
      defualtIconColor: selectedColorData,
      active: true,
      accessEdit: true,
      message: 0,
      tasks: [],
      id: Date.now(),
    }
    
    setListsStore(prev => [...prev, newList])    

    onClose()
  }


  return (
      <Modal isOpen={isOpen} onClose={onClose}>
          <Input
              value={newListName}
              onChange={event => setNewListName(event.target.value)}
              labelName="List name: "
              classNameContainer="mb-5"
          />
          <div className="flex justify-between items-end">
            <Color 
              colors={colorsSelectDatas}
              colorsHandler={setColorsSelectDatas}
              saveVarbaleColorHandler={setSelectedData}
              labelName="Color:"
            /> 
          </div> 
          <Button onClick={addNewListHandler} variant="contained" className="mt-8">Add new list</Button>
      </Modal>
  );
}

export default AddNewListModal