import { Route, Routes } from "react-router-dom"
import { RoutesData } from "./RoutesData"
import Error from "../pages/Error/Error"
import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider"
import Welcome from "../pages/Welcome/Welcome"
import Home from "../pages/Home/Home"

const Routering = () => {
    const {firstVisit} = useLocalStorageContext()

    return (
        <Routes>
            {
                RoutesData.map(data => {
                    return <Route key={data.id} path={data.path} element={<data.element />} />
                })
            }
            <Route path="/" element={firstVisit ? <Welcome /> : <Home />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default Routering