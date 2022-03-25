import { Box, Button, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardGameContext } from "../../contexts/card-game-context";
import { ICard } from "../../models/ICard";
import { CardDataService } from "../../services/card-data-service";
import { Card } from "./Card";
import { PlayerCards } from "./PlayerCards";


export const CardSelection = (props: {onReady:any}) => {
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
        <SimpleGrid row={2} columns={5} minChildWidth='120px' h='100vh'>
            <GridItem colSpan={4} textAlign="center">
            <Heading>Choose your cards</Heading>
                <Flex gap={4} wrap='wrap' p={4}>
                    {cardOptions.map((c) => 
                        <Box key={c.name} onClick={(e) => onCardClick(e, c)}>
                            <Card card={c} />
                        </Box>)}
                </Flex>
                <Button disabled={selection.length !== 5} onClick={props.onReady} mt={10}>Play!</Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} textAlign='center'>
                <Heading>Selection</Heading>
                <PlayerCards cards={selection} />
            </GridItem>
        </SimpleGrid>
    )
}