import { createContext, useContext, useState, ReactElement } from 'react'
import { IGlobalState, defualtValueGlobalState } from './GlobalStateData'
import { ITagModalData, ITaskEditModalData } from '../../types/interfaces/Interfaces'

const GlobalStateContext = createContext<IGlobalState>(defualtValueGlobalState)

export const useGlobalStateContext = () => useContext(GlobalStateContext)

const GlobalStateProvider = ({children}: {children: ReactElement}) => {

  const [tagModalData, setTagModalData] = useState<ITagModalData>({
    isOpenTagModal: false,
    displayingTagData: null
  })

  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState(false)
  const [taskEditModalData, setTaskEditModalData] = useState<ITaskEditModalData>({
    isOpenModal: false,
    taskDataToEdit: null
  })

  return (
    <GlobalStateContext.Provider value={{
      tagModalData,
      setTagModalData,
      isOpenSidebarMenu,
      setIsOpenSidebarMenu,
      taskEditModalData,
      setTaskEditModalData,
    }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider