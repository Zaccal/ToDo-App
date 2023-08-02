import ListItem from "../../UI/ListItem/ListItem"
import { getListsIcon } from "./utils/getListIcon"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"

interface ISidebarListsRender {
  variant: 'user' | 'defualt'
}

const SidebarListsRender = ({variant}: ISidebarListsRender) => {
  const {listsStore, setListsStore} = useLocalStorageContext()
  const lists =
      variant === "defualt"
          ? [...listsStore].slice(0, 4)
          : [...listsStore].slice(4, listsStore.length);

  const changeActiveLists = (id: number) => {
    const updatedLists = listsStore.map(listData => {
      if (listData.id === id) {
        return {...listData, active: true}
      }

      return {...listData, active: false}
    })
    
    setListsStore(updatedLists)
  }

  return (
    <>
      {
        lists.map(listData => {
          return (
              <ListItem
                  onClick={() => changeActiveLists(listData.id)}
                  key={listData.id}
                  primary={listData.name}
                  icon={getListsIcon(listData.icon, listData.defualtIconColor)}
                  messageCount={listData.message}
                  active={listData.active}
              />
          );
        })
      }    
    </>
  )
}

export default SidebarListsRender