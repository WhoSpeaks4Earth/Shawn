import { Box, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { ICard } from "../models/ICard";
import { CardDataService } from "../services/card-data-service";
import { Card } from "./Card";
import { PlayerCards } from "./PlayerCards";


export const CardSelection = () => {

    const [selection, setSelection] = useState<ICard[]>([]);

    // TODO: put into hook
    const cardService = new CardDataService();
    cardService.loadCards();

    const onCardClick = (e: any, card: ICard) => {
        const existingCardIndex = selection.findIndex(c => c.name === card.name);
        if (existingCardIndex > -1)
        {
            selection.splice(existingCardIndex, 1);
            setSelection([...selection]);
        }
        else
            setSelection([...selection, card]);
    }
    
    return (
        <SimpleGrid columns={5}>
            <GridItem colSpan={4}>
            <Heading>Choose your cards</Heading>
                <Flex gap={4} wrap='wrap'>
                    {cardService.allCards.map((c) => <Box key={c.name} onClick={(e) => onCardClick(e, c)}><Card card={c} /></Box>)}
                </Flex>
            </GridItem>
            <GridItem>
                <Heading>Selection</Heading>
                <PlayerCards cards={selection} />
            </GridItem>
        </SimpleGrid>
    )
}