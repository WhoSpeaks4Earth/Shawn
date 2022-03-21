import { AspectRatio, Box } from "@chakra-ui/react"
import { ICard } from "../models/ICard"

export const Card = (props: ICard) => (

    <AspectRatio maxW='150px' ratio={3 / 4}>
        <Box border='1px solid gray'>
            {props.name}
        </Box>
    </AspectRatio>
    
)