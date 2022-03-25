import { Flex } from "@chakra-ui/react";
import { ICard } from "../../models/ICard";
import { Card } from "./Card";
import "./cards.css";


export const PlayerCards = (props: {cards: ICard[]}) => {

    const getCardOffsetStyle = (cardIndex: number) => {
        let style: any = {position: 'relative'};

        if (cardIndex > 0)
            style = {...style, top: -100 * cardIndex + 'px'}
        
        return style;
    }

    return (
        <Flex direction='column' gap={2} justifyContent='center' alignItems='center' p={4}>
            {props.cards.map((c, i) => <Card key={c.name} card={c} customStyle={getCardOffsetStyle(i)} />)}
        </Flex>
    )
}