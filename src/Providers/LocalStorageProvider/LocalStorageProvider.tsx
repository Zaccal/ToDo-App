import { ReactElement, createContext, useContext } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import { ILocalStorage, ListsDatas, defualtValueLocalStorage, settingsDatas, tagsDatas } from "./LocalStorageDatas"

const localStorageContext = createContext<ILocalStorage>(defualtValueLocalStorage)

export const useLocalStorageContext = () => useContext(localStorageContext)

const LocalStorageProvider = ({children}: {children: ReactElement}) => {
    const [listsStore, setListsStore] = useLocalStorage('lists', ListsDatas)
    const [settingsStore, setSettingsStore] = useLocalStorage('settings', settingsDatas)
    const [tagsStore, setTagsStore] = useLocalStorage('tags', tagsDatas)
    const [firstVisit, setFirstVisit] = useLocalStorage('firstVisit', true);

    return (
        <localStorageContext.Provider value={{
            listsStore,
            setListsStore, 
            settingsStore,
            setSettingsStore,
            tagsStore,
            setTagsStore,
            firstVisit,
            setFirstVisit
        }}>
            {children}
        </localStorageContext.Provider>
    )
}

export default LocalStorageProvider