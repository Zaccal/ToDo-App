import { ReactElement, useEffect, useState } from "react"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import classes from './BarContainer.module.css'

interface IBarContainer {
  children: ReactElement | ReactElement[],
  title: string,
  subHeader?: ReactElement,
  isOpen?: boolean,
  onClose?: () => void,
  isMobileMode: boolean,
}

const BarContainer = ({children, title, subHeader, isOpen = false, onClose, isMobileMode}: IBarContainer) => {
  const [rootClassesContainer, setRootClassesContainer] = useState([classes.container, 'hidden'])
  const [rootClassesMenu, setRootClassesMenu] = useState([classes.menu, 'left-[-100%]'])

  // Animation on open or close 
  useEffect(() => {
    if (isOpen) {
      setRootClassesContainer([...rootClassesContainer, 'block'].filter(classEl => classEl !== 'hidden'))

      setTimeout(() => {
        setRootClassesMenu([...rootClassesMenu, 'left-0'].filter(classEl => classEl !== 'left-[-100%]'))
      }, 30)

      return undefined
    }

    setRootClassesMenu([...rootClassesMenu, 'left-[-100%]'].filter(classEl => classEl !== 'left-0'))
    
    setTimeout(() => {
      setRootClassesContainer([...rootClassesContainer, 'hidden'].filter(classEl => classEl !== 'block'))
    }, 50)

  }, [isOpen])

  if (isMobileMode) {
    return (
      <div onClick={onClose} className={rootClassesContainer.join(' ')}>
        <div className={rootClassesMenu.join(' ')}>
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-2xl">{title}</h3>
            <button onClick={onClose} className="w-8 h-8">
              <AiOutlineCloseCircle/>
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bgColor rounded-2xl py-3 px-4 h-full relative">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-2xl">{title}</h3>
          {subHeader}
        </div>
        {children}
    </div>
  )
}

export default BarContainer