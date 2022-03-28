import { Grid, GridItem } from "@chakra-ui/layout"
import { ICardGame } from "../../models/ICardGame"
import { PlayerCards } from "./PlayerCards"


export const GameTable = (props:{game: ICardGame}) => {

    return (
        <Grid h='100vh' templateRows='repeat(7, 1fr)' templateColumns='repeat(5, 1fr)' gap={2} p={4}>
            <GridItem rowSpan={6} p={4} border='1px solid blue'>
                opponent cards
                {/* <PlayerCards /> */}
            </GridItem>
            <GridItem rowSpan={6} colSpan={3} p={4} border='1px solid blue'>
                {/* <CardTableGrid /> */}
                {/* <Card /> */}
                grid
            </GridItem>
            <GridItem rowSpan={6} p={4} border='1px solid blue'>
            <PlayerCards cards={props.game.playerHand} />
            </GridItem>
            <GridItem colSpan={5} p={4} border='1px solid blue'>bottom</GridItem>
        </Grid>
    )
}