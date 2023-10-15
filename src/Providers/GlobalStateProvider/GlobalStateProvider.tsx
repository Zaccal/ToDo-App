import { createContext, useContext, useState, ReactElement } from 'react'
import { IGlobalState, defualtValueGlobalState } from './GlobalStateData'
import { ITagModalData, ITaskForEditData } from '../../types/interfaces/Interfaces'

const GlobalStateContext = createContext<IGlobalState>(defualtValueGlobalState)

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStateContext = () => useContext(GlobalStateContext)

const GlobalStateProvider = ({children}: {children: ReactElement}) => {

  const [tagModalData, setTagModalData] = useState<ITagModalData>({
    isOpenTagModal: false,
    displayingTagData: null
  })

  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState(false)
  const [taskForEditData, setTaskForEditData] = useState<ITaskForEditData>({
      isOpenModal: false,
      taskDataToEdit: null,
  });

  return (
    <GlobalStateContext.Provider value={{
      tagModalData,
      setTagModalData,
      isOpenSidebarMenu,
      setIsOpenSidebarMenu,
      taskForEditData,
      setTaskForEditData,
    }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider