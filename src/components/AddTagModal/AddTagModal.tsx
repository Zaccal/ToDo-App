import { useState } from 'react'
import defualtColorsDatas from "./DefualtColors"
import Color from "../../UI/Color/Color"
import Input from "../../UI/Input/Input"
import Modal from "../../UI/Modal/Modal"
import { TypeCustomModal } from "../../types/types/types"
import Button from '../../UI/Button/Button'

export interface ITagData {
  title: string,
  color: string,
  id: number
}

const AddTagModal = ({isOpen, onClose}: TypeCustomModal) => {  
  const [defualtColorsState, setDefualtColorsState] = useState(defualtColorsDatas)
  const [newTagColor, setNewTagColor] = useState(defualtColorsDatas[0].color)
  const [newTagDate, setTagDate] = useState<ITagData>({
    title: '',
    color: newTagColor,
    id: Date.now(),     
  })
    
  // TODO: Maybe I'll add function for generate random color
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
          <Input
              value={newTagDate.title}
              onChange={(event) => setTagDate({ ...newTagDate, title: event.target.value })}
              labelName="Tag title"
          />
          <Color
              colorsHandler={setDefualtColorsState}
              saveVarbaleColorHandler={setNewTagColor}
              colors={defualtColorsState}
              className="mt-3"
              labelName="Colors"
          />

          <Button variant="contained" className="mt-[1.5rem]">
              Add tag
          </Button>
      </Modal>
  );
}

export default AddTagModal