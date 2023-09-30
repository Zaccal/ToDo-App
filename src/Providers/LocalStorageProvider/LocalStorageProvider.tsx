import { ReactElement, createContext, useContext } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import { ILocalStorage, ListsDatas, defualtValueLocalStorage, settingsDatas, tagsDatas } from "./LocalStorageDatas"

const localStorageContext = createContext<ILocalStorage>(defualtValueLocalStorage)

// eslint-disable-next-line react-refresh/only-export-components
export const useLocalStorageContext = () => useContext(localStorageContext)

const LocalStorageProvider = ({children}: {children: ReactElement}) => {
    const [listsStore, setListsStore] = useLocalStorage('lists', ListsDatas)
    const [settingsStore, setSettingsStore] = useLocalStorage('settings', settingsDatas)
    const [tagsStore, setTagsStore] = useLocalStorage('tags', tagsDatas)

    return (
        <localStorageContext.Provider value={{
            listsStore,
            setListsStore, 
            settingsStore,
            setSettingsStore,
            tagsStore,
            setTagsStore,
        }}>
            {children}
        </localStorageContext.Provider>
    )
}

export default LocalStorageProvider