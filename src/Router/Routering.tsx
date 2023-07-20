import { Route, Routes } from "react-router-dom"
import { RoutesDate } from "./RoutesDate"

const Routering = () => {
    const user = {
        auth: true
    }

    return (
        <Routes>
            {
                RoutesDate.map(date => {
                    if (date.auth && user.auth)
                        return <Route key={date.id} path={date.path} element={<date.element />} />

                    return undefined
                })
            }
        </Routes>
    )
}

export default Routering