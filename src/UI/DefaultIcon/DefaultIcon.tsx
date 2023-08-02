import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

type TypeDefaultIcon = {
    color?: string,
} 

const DefaultIcon = ({color}: TypeDefaultIcon) => {
    // const iconColor = useColorGenerateRange(255, 107)

    return (
        <div style={{
            color: color ? color : '#898989' 
        }}>
            <SquareRoundedIcon style={{width: '18px', height: '18px'}}/>
        </div>
    )
}

export default DefaultIcon