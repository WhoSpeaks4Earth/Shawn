import { Flex } from "@chakra-ui/react";
import { ICard } from "../models/ICard";
import { Card } from "./Card";


export const PlayerCards = (props: {cards: ICard[]}) => {

    console.log(props)

    return (
        <Flex direction='column' gap={2}>
            {props.cards.map(c => <Card key={c.name} {...c} />)}
        </Flex>
    )
}