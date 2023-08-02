import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LocalStorageProvider from '../LocalStorageProvider/LocalStorageProvider'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import GlobalStateProvider from '../GlobalStateProvider/GlobalStateProvider'

const Providers = ({children}: {children: ReactElement}) => {
  return (
    <BrowserRouter>
        <LocalStorageProvider>
            <GlobalStateProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </GlobalStateProvider>
        </LocalStorageProvider>
    </BrowserRouter>
  )
}

export default Providers