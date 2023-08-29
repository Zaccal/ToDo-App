import { useState, KeyboardEvent, useEffect } from "react";
import MessageCountTitle from "../../UI/MessageCountTitle/MessageCountTitle";
import useGetNowActiveList from "../../hooks/useGetNowActiveList";
import Input from "../../UI/Input/Input";
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider";
import { getListTaskDoneCount } from "../../utils/utils";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider";

interface IClipboardListTitle {
    className?: string
}

const ClipboardListTitle = ({className}: IClipboardListTitle) => {
    const nowActiveList = useGetNowActiveList()
    const {listsStore, setListsStore, settingsStore} = useLocalStorageContext()
    const [editMode, setEditMode] = useState(false)
    const [listName, setListName] = useState(nowActiveList.name)
    const isScreenMd = window.innerWidth <= 1024 ? true : false
    const {setIsOpenSidebarMenu} = useGlobalStateContext()

    useEffect(() => {
        setListName(nowActiveList.name)
    }, [nowActiveList])

    const switchEditModeHandler = () => {
        if (nowActiveList.accessEdit) {
            setEditMode(true)
        }
    }

    const changeNameHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.currentTarget.value.length >= 1) {            
            setEditMode(false)
            setListName(event.currentTarget.value)

            setListsStore(listsStore.map(listData => {
                if (listData.id === nowActiveList.id) {
                    return {...listData, name: listName}
                }

                return listData
            }))
        }
    }

    return (
        <div onClick={switchEditModeHandler} className={`${className || ''} flex items-center justify-between`}>
            <div className="flex items-center">
                {!editMode && (
                    <h1 style={{
                        cursor: nowActiveList.accessEdit ? 'pointer' : 'auto', 
                    }} className="text-5xl font-black dark:text-white">
                        {nowActiveList.name}
                    </h1>
                )}
                {editMode && (
                    <Input 
                        autoFocus 
                        value={listName}
                        onKeyUp={event => changeNameHandler(event)} 
                        onChange={event => setListName(event.target.value)} 
                        onBlur={() => setEditMode(false)}
                        classNameContainer="max-w-[200px] h-12"
                        className="font-black text-2xl text-center"
                    />
                )}
                <MessageCountTitle className="ml-5" count={getListTaskDoneCount(nowActiveList.tasks)}/>
            </div>
            {
                isScreenMd && (
                    <div onClick={() => setIsOpenSidebarMenu(true)}>
                        <MenuRoundedIcon style={{
                            width: '32px',
                            height: '32px',
                            color: settingsStore.theme === 'light' ? '#313131' : '#fff'
                        }}/>
                    </div>
                )
            }
        </div>
    );
};

export default ClipboardListTitle;
