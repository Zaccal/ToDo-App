import { Route, Routes } from "react-router-dom"
import { RoutesData } from "./RoutesData"
import Error from "../pages/Error/Error"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import Welcome from "../pages/Welcome/Welcome"
import Home from "../pages/Home/Home"

const Routering = () => {
    const { settingsStore } = useLocalStorageContext()
    const defualtPage = settingsStore.isShowWelcomeMenu ? <Welcome /> : <Home />
    return (
        <Routes>
            {RoutesData.map(data => {
                return <Route key={data.id} path={data.path} element={<data.element />} />
            })}
            <Route path="/" element={defualtPage} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Routering
