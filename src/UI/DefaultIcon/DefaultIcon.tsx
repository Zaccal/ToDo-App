import { BsFillSquareFill } from 'react-icons/bs'

type TypeDefaultIcon = {
    color?: string,
} 

const DefaultIcon = ({color}: TypeDefaultIcon) => {
    // const iconColor = useColorGenerateRange(255, 107)

    return (
        <div style={{
            color: color ? color : '#898989' 
        }}>
            <BsFillSquareFill />
        </div>
    )
}

export default DefaultIcon