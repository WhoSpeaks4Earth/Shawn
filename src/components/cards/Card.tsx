import { AspectRatio, Box } from "@chakra-ui/react"
import { ICard } from "../../models/ICard"


export const Card = (props: {card: ICard, customStyle?: any}) => (

    <AspectRatio w={[50, 80, 100, 120]} mt={6} ratio={3 / 4} className='card' style={props.customStyle}>
        <Box>
            {props.card.name}
        </Box>
    </AspectRatio>
    
)