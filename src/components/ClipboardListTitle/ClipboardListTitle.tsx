import { useState, KeyboardEvent, useEffect, useCallback } from "react"
import MessageCountTitle from "../../UI/MessageCountTitle/MessageCountTitle"
import useGetNowActiveList from "../../hooks/useGetNowActiveList"
import Input from "../../UI/Input/Input"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import { getListTaskDoneCount } from "../../utils/utils"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import Button from "../../UI/Button/Button"
import DeleteRounded from "@mui/icons-material/DeleteRounded"
import Alert from "../Alert/Alert"

interface IClipboardListTitle {
    className?: string
}

const ClipboardListTitle = ({ className }: IClipboardListTitle) => {
    const nowActiveList = useGetNowActiveList()
    const { listsStore, setListsStore, settingsStore } = useLocalStorageContext()
    const [editMode, setEditMode] = useState(false)
    const [listName, setListName] = useState(nowActiveList.name)
    const isScreenMd = window.innerWidth <= 1024 ? true : false
    const { setIsOpenSidebarMenu } = useGlobalStateContext()
    const [alertConfirmationToDeleteList, setAlertConfirmationToDeleteList] = useState(false)

    useEffect(() => {
        setListName(nowActiveList.name)
    }, [nowActiveList])

    const switchEditModeHandler = () => {
        if (nowActiveList.accessEdit) {
            setEditMode(true)
        }
    }

    const changeNameHandler = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter" && event.currentTarget.value.length >= 1) {
                setEditMode(false)
                setListName(event.currentTarget.value)

                setListsStore(
                    listsStore.map(listData => {
                        if (listData.id === nowActiveList.id) {
                            return { ...listData, name: listName, tasks: listData.tasks.map(taskData => ({ ...taskData, fromList: listName })) }
                        }

                        return listData
                    })
                )
            }
        },
        [nowActiveList, listsStore]
    )

    const deleteListHandler = useCallback(() => {
        setListsStore(listsStore.filter(listData => listData.id !== nowActiveList.id))
        setListsStore(prev =>
            prev.map((listData, index) => {
                if (index === prev.length - 1) {
                    return {
                        ...listData,
                        active: true,
                    }
                }

                return listData
            })
        )
    }, [nowActiveList, listsStore])

    return (
        <div className={`${className || ""} flex items-center justify-between`}>
            <div onClick={switchEditModeHandler} className="flex items-center">
                {!editMode && (
                    <h1
                        style={{
                            cursor: nowActiveList.accessEdit ? "pointer" : "auto",
                        }}
                        className="text-5xl font-black dark:text-white"
                    >
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
                <MessageCountTitle className="ml-5" count={getListTaskDoneCount(nowActiveList.tasks)} />
            </div>
            <div className="flex gap-5">
                {nowActiveList.accessEdit && (
                    <Button
                        onClick={() => setAlertConfirmationToDeleteList(true)}
                        className="!border-red-500 w-8 h-8 md:w-10 md:h-10"
                        variant="outline"
                        icon={<DeleteRounded className="text-red-500" />}
                    ></Button>
                )}
                <Alert
                    onYes={{
                        text: "Yes",
                        event: () => {
                            setAlertConfirmationToDeleteList(false)
                            deleteListHandler()
                        },
                    }}
                    subtitle={`"${nowActiveList.name}" will be permanently deleted`}
                    title="Are you sure?"
                    isOpen={alertConfirmationToDeleteList}
                    onClose={() => setAlertConfirmationToDeleteList(false)}
                />
                {isScreenMd && (
                    <div className="border-2 rounded-lg" onClick={() => setIsOpenSidebarMenu(true)}>
                        <MenuRoundedIcon
                            style={{
                                width: "28px",
                                height: "28px",
                                color: settingsStore.theme === "light" ? "#313131" : "#fff",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ClipboardListTitle
