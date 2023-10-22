import Switch from "../../UI/Switch/Switch"
import LayoutContainer from "../../UI/LayoutContainer/LayoutContainer"
import { useState, useEffect } from "react"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import Button from "../../UI/Button/Button"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import { useNavigate } from "react-router-dom"
import SettingsOption from "../../UI/SettingsOption/SettingsOption"

const Settings = () => {
    const { settingsStore, setSettingsStore } = useLocalStorageContext()
    const [darkMode, setDarkMode] = useState(settingsStore.theme === "dark" ? true : false)
    const [isShowWelcomeMenu, setIsShowWelcomeMenu] = useState(settingsStore.isShowWelcomeMenu)
    const navigate = useNavigate()

    useEffect(() => {
        setSettingsStore({
            theme: darkMode ? "dark" : "light",
            isShowWelcomeMenu,
        })
        console.log(true)
    }, [darkMode, isShowWelcomeMenu])

    return (
        <div className="px-3 py-3">
            <div className="mb-6 flex items-center ">
                <Button
                    onClick={() => navigate(-1)}
                    icon={<ArrowBackIosNewRoundedIcon style={{ width: "26px", height: "26px" }} className="dark:text-white" />}
                ></Button>
                <h1 className="dark:text-white text-3xl">Settings</h1>
            </div>
            <LayoutContainer col={12} className="bg-bgColor dark:bg-bgColorDark rounded-lg">
                <SettingsOption label="Dark mode">
                    <Switch statusHandler={() => setDarkMode(prev => !prev)} status={darkMode} />
                </SettingsOption>
                <SettingsOption label="Show welcome page">
                    <Switch statusHandler={() => setIsShowWelcomeMenu(prev => !prev)} status={isShowWelcomeMenu} />
                </SettingsOption>
            </LayoutContainer>
        </div>
    )
}

export default Settings
