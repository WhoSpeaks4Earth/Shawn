import { Box, Button, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CardGameContext } from "../../contexts/card-game-context";
import { ICard } from "../../models/ICard";
import { CardDataService } from "../../services/card-data-service";
import { Card } from "./Card";
import { PlayerCards } from "./PlayerCards";


export const CardSelection = () => {
    const [cardOptions, setCardOptions] = useState<ICard[]>([]);
    const [selection, setSelection] = useState<ICard[]>([]);

    // const {value, setValue} = useContext(CardGameContext);

    useEffect(() => {
        const cardService = new CardDataService();
        cardService.loadCards();
        setCardOptions(cardService.allCards);
    }, []);


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
        <SimpleGrid row={2} columns={5} h='100vh' border="1px solid blue">
            <GridItem colSpan={4} textAlign="center">
            <Heading>Choose your cards</Heading>
                <Flex gap={4} wrap='wrap'>
                    {cardOptions.map((c) => <Box key={c.name} onClick={(e) => onCardClick(e, c)}><Card card={c} /></Box>)}
                </Flex>
                <Button disabled={selection.length !== 5}>Play!</Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                <Heading>Selection</Heading>
                <PlayerCards cards={selection} />
            </GridItem>
        </SimpleGrid>
    )
}