import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { CardDataService } from "../services/card-data-service";
import { Card } from "./Card";


export const CardSelection = () => {

    // const [selection, setSelection] = useState([]);

    const cardService = new CardDataService();
    cardService.loadCards();
    console.log(cardService.allCards);

    
    
    return (
        <SimpleGrid row={1} columns={4}>
            <GridItem colSpan={3}>
                {cardService.allCards.map((c) => <Box key={c.name}>{c.name}</Box>)}
            </GridItem>
            <GridItem>Selection</GridItem>
        </SimpleGrid>
    )
}