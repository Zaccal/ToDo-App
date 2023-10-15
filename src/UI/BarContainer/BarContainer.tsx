import { ReactElement, useEffect, useState } from "react"
import classes from './BarContainer.module.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

interface IBarContainer {
  children?: ReactElement | ReactElement[],
  title?: string,
  subHeader?: ReactElement,
  isOpen: boolean,
  onClose?: () => void,
  isMobileMode: boolean,
  side?: 'left' | 'right'
}

const BarContainer = ({children, title, subHeader, isOpen = false, onClose, isMobileMode, side = 'left'}: IBarContainer) => {
  const hideMenuClass = side === 'left' ? classes.closeLeft : classes.closeRight
  const openMenuClass = side === 'left' ? classes.openLeft : classes.openRight 
  const [rootClassesContainer, setRootClassesContainer] = useState([classes.container, 'hidden'])
  const [rootClassesMenu, setRootClassesMenu] = useState([classes.menu, hideMenuClass])

  // Animation on open or close 
  useEffect(() => {
    if (isOpen) {
      setRootClassesContainer([...rootClassesContainer, 'block'].filter(classEl => classEl !== 'hidden'))

      setTimeout(() => {
        setRootClassesMenu([...rootClassesMenu, openMenuClass].filter(classEl => classEl !== hideMenuClass))
      }, 30)

      return undefined
    }

    setRootClassesMenu([...rootClassesMenu, hideMenuClass].filter(classEl => classEl !== openMenuClass))
    
    setTimeout(() => {
      setRootClassesContainer([...rootClassesContainer, 'hidden'].filter(classEl => classEl !== 'block'))
    }, 50)

  }, [isOpen])

  if (isMobileMode) {
    return (
      <div onClick={onClose} className={rootClassesContainer.join(' ')}>
        <div className={`dark:bg-bgColorDark dark:text-white ${rootClassesMenu.join(' ')}`} onClick={event => event.stopPropagation()}>
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-2xl">{title}</h3>
            <button onClick={onClose} className="w-8 h-8">
              <HighlightOffOutlinedIcon />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bgColor dark:bg-bgColorDark dark:text-white inline-block rounded-2xl py-3 px-4 h-full relative">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-2xl">{title}</h3>
          {subHeader}
        </div>
        {children}
    </div>
  )
}

export default BarContainer