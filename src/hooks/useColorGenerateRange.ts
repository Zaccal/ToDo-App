import { useMemo } from "react"

const useColorGenerateRange = (max: number, min: number): string => {
    const generateRandomNumber = (): number => {
        return Math.round(Math.random() * (max - min) + min)
    }

    return useMemo(() => {
        return `rgb(${generateRandomNumber()},${generateRandomNumber()}, ${generateRandomNumber()})`
    }, [])

}

export default useColorGenerateRange