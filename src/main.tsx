import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Routering from "./Router/Routering"
import Providers from "./Providers/Providers"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <Routering />
        </Providers>
    </StrictMode>
)
