import { createContext, useContext, useState, ReactElement } from 'react'
import { IGlobalState, defualtTag, defualtValueGlobalState } from './GlobalStateData'
import { useLocalStorageContext } from '../LocalStorageProvider/LocalStorageProvider'

const GlobalStateContext = createContext<IGlobalState>(defualtValueGlobalState)

export const useGlobalStateContext = () => useContext(GlobalStateContext)

const GlobalStateProvider = ({children}: {children: ReactElement}) => {
  const {tagsStore} = useLocalStorageContext()
  const [visibleTagModal, setVisibleTagModal] = useState(false)
  const [displayingTagModal, setDisplayingTagModal] = useState(tagsStore[0] || defualtTag)

  return (
    <GlobalStateContext.Provider value={{
      visibleTagModal,
      setVisibleTagModal,
      displayingTagModal,
      setDisplayingTagModal,
    }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider