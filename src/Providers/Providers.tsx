import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LocalStorageProvider from './LocalStorageProvider/LocalStorageProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'
import GlobalStateProvider from './GlobalStateProvider/GlobalStateProvider'
import TaskManagingProvider from './TaskManagingProvider/TaskManagingProvider'

const Providers = ({children}: {children: ReactElement}) => {
  return (
    <BrowserRouter>
        <LocalStorageProvider>
            <GlobalStateProvider>
              <ThemeProvider>
                <TaskManagingProvider >
                  {children}
                </TaskManagingProvider>
              </ThemeProvider>
            </GlobalStateProvider>
        </LocalStorageProvider>
    </BrowserRouter>
  )
}

export default Providers