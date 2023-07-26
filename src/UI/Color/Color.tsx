import { TypeSetState } from "../../types/types/types"
import ColorItem from "../ColorItem/ColorItem"
import classes from './Color.module.css'

export interface IColorData {
  color: string,
  active: boolean,
  id: number,
}

interface IColor {
    labelName?: string,
    className?: string,
    colors: IColorData[],
    colorsHandler: TypeSetState<IColorData[]>,
    saveVarbaleColorHandler: TypeSetState<string>,
}

const Color = ({labelName, className, colors, colorsHandler, saveVarbaleColorHandler}: IColor) => {
  function setActiveStatusColor(colorItemData: IColorData): void {
    // Change active status
    colorsHandler([...colors].map(colorData => {
      if (colorItemData.id === colorData.id) {
        return {
          color: colorData.color,
          active: true,
          id: colorData.id
        }
      }

      return {
        color: colorData.color,
        active: false,
        id: colorData.id
      }
    }))

    saveVarbaleColorHandler(colorItemData.color)
  }

  return (
    <div className={className}>
        {labelName && (<label htmlFor="color" className="text-sm">{labelName}</label>)} <br />
        <div className={`${labelName ? 'mt-2' : ''} ${classes.container} flex`}>
          {
            colors.map(colorDate => {
              return (<ColorItem onClick={() => setActiveStatusColor(colorDate)} active={colorDate.active} color={colorDate.color} key={colorDate.id}/>)
            })
          }
        </div>
    </div>
  )
}

export default Color