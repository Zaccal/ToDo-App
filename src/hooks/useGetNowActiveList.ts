import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider";
import { IList } from "../types/interfaces/Interfaces";

const useGetNowActiveList = (): IList => {
    const {listsStore} = useLocalStorageContext()

    return listsStore.find(listData => listData.active === true)!
}

export default useGetNowActiveList