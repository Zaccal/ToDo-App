import Switch from "../../UI/Switch/Switch"
import LayoutContainer from "../../UI/LayoutContainer/LayoutContainer"
import { useState, useEffect } from 'react'
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"

const Settings = () => {
  const {settingsStore, setSettingsStore} = useLocalStorageContext() 
  const [darkMode, setDarkMode] = useState(settingsStore.theme === 'dark' ? true : false)

  useEffect(() => {    
    setSettingsStore({        
        theme: darkMode ? 'dark' : 'light',
        isShowWelcomeMenu: settingsStore.isShowWelcomeMenu,
    })
  }, [darkMode])
  

  return (
    <LayoutContainer col={12} paddingTop={1} paddingLeft={1} paddingRight={1} paddingBottom={1}>
        <div style={{gridColumn: '1 / 13'}} className="bg-bgColor dark:bg-bgColorDark rounded-lg">
            <Switch statusHandler={() => setDarkMode(prev => !prev)} status={darkMode}/>
        </div>
    </LayoutContainer>
  )
}

export default Settings