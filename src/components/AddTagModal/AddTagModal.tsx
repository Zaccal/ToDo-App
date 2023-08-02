import { useState } from 'react'
import defualtColorsDatas from "./DefualtColors"
import Color from "../../UI/Color/Color"
import Input from "../../UI/Input/Input"
import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"
import Button from '../../UI/Button/Button'
import { useLocalStorageContext } from '../../Providers/LocalStorageProvider/LocalStorageProvider'


const AddTagModal = ({isOpen, onClose}: TypeCustomModal) => {  
  const [selectColorsDatas, setSelectColorsDatas] = useState(defualtColorsDatas)
  const [newTagColor, setNewTagColor] = useState(defualtColorsDatas[0].color)
  const [newTagTitle, setNewTagTitle] = useState('')

  const [errorVisible, setErrorVisible] = useState(false)
  const { tagsStore, setTagsStore } = useLocalStorageContext()  

  const addTagHandler = () => {
    if (newTagTitle && newTagTitle.length <= 12) {
      setNewTagTitle('')        
      setErrorVisible(false)

      setTagsStore([...tagsStore, {
        name: newTagTitle,
        color: newTagColor,
        id: Date.now(),
        listsById: []
      }])

      onClose()

      return undefined
    }

    setErrorVisible(true)
  }

  // TODO: Maybe I'll add function for generate random color
  return (
      <Modal isOpen={isOpen} onClose={onClose}>

          <Input
              value={newTagTitle}
              onChange={event => setNewTagTitle(event.target.value)}
              labelName="Tag name:"
              labelError={errorVisible}
              errorMessage='enter a name for the tag (name length must be less 12 symbols)'
              className='text-red'
          />
          <Color
              colorsHandler={setSelectColorsDatas}
              saveVarbaleColorHandler={setNewTagColor}
              colors={selectColorsDatas}
              className="mt-3"
              labelName="Colors"
          />

          <Button onClick={addTagHandler} variant="contained" className="mt-[1.5rem]">
              Add tag
          </Button>
      </Modal>
  );
}

export default AddTagModal