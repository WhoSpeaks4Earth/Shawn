import { AspectRatio, Box } from "@chakra-ui/react"
import { ICard } from "../models/ICard"


export const Card = (props: {card: ICard, customStyle?: any}) => (

    <AspectRatio maxW='150px' w='150px' ratio={3 / 4} className='card' style={props.customStyle}>
        <Box border='1px solid gray'>
            {props.card.name}
        </Box>
    </AspectRatio>
    
)