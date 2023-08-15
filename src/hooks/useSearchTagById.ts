import { useLocalStorageContext } from "../Providers/LocalStorageProvider/LocalStorageProvider";
import { ITag } from "../types/interfaces/Interfaces";
import { useCallback } from 'react'

const useSearchTagById = (): (searchTagId: number) => ITag | null => {
    const { tagsStore } = useLocalStorageContext();
    const searchFunction = useCallback((searchTagId: number) => {
        let low = 0;
        let hight = tagsStore.length - 1;
        
        for (let i = 0; i < tagsStore.length; i++) {
            const middle = Math.floor((low + hight) / 2);
            const guess = tagsStore[middle];

            if (guess.id === searchTagId) return guess;

            if (guess.id < searchTagId) low = middle + 1;
            else hight = middle - 1;
        }

        return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tagsStore]);

    return searchFunction
};

export default useSearchTagById;
