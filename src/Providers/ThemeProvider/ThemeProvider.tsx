import { ReactElement, useEffect } from "react";
import { useLocalStorageContext } from "../LocalStorageProvider/LocalStorageProvider";

const ThemeProvider = ({ children }: { children: ReactElement }) => {
    const {settingsStore} = useLocalStorageContext()
    
    useEffect(() => {
        if (settingsStore.theme === 'dark') {
            document.querySelector('body')?.classList.add('dark')
        }
        else {
            document.querySelector('body')?.classList.remove('dark')
        }
    }, [settingsStore.theme])

    return <>{children}</>;
};

export default ThemeProvider;
