import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { CardGameContext } from "../../contexts/card-game-context";
import { ICard } from "../../models/ICard";
import { Card } from "./Card";
import { CardSelection } from "./CardSelection";
import { CardTableGrid } from "./CardTableGrid";
import { PlayerCards } from "./PlayerCards";

export const CardGame = () => {
    
    return (
        // <CardGameContext.Provider>
            <CardSelection />
        // </CardGameContext.Provider>
        
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