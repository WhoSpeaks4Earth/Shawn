import { Grid, GridItem } from "@chakra-ui/react";
import { CardDataService } from "../services/card-data-service";
import { Card } from "./Card";
import { CardSelection } from "./CardSelection";
import { CardTableGrid } from "./CardTableGrid";
import { PlayerCards } from "./PlayerCards";

export const CardGame = () => {

    const cardService = new CardDataService();
    cardService.loadCards();
    console.log(cardService.allCards);
    
    return (
        <CardSelection />
    //     <Grid h='100vh' templateRows='repeat(7, 1fr)' templateColumns='repeat(5, 1fr)' gap={2} p={4}>
    //     <GridItem rowSpan={6} p={4} border='1px solid blue'>
    //         <PlayerCards />
    //     </GridItem>
    //     <GridItem rowSpan={6} colSpan={3} p={4} border='1px solid blue'>
    //         {/* <CardTableGrid /> */}
    //         {/* <Card /> */}
    //     </GridItem>
    //     <GridItem rowSpan={6} p={4} border='1px solid blue'>
    //         <PlayerCards />
    //     </GridItem>
    //     <GridItem colSpan={5} p={4} border='1px solid blue'>bottom</GridItem>
    // </Grid>
    )
}