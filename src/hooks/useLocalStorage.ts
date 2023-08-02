import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> =Dispatch<SetStateAction<T>> 

function useLocalStorage<T>(key: string, value: T): [T, SetValue<T>] {
    const [valueItem, setValueItem] = useState<T>(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key) || '')

        return value
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(valueItem))
    }, [valueItem, value])

    return [valueItem, setValueItem]
}

export default useLocalStorage