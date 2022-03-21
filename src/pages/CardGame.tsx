import { Grid, GridItem } from "@chakra-ui/react";

export const CardGame = () => (
    <Grid h='100vh' templateRows='repeat(5, 1fr)' templateColumns='repeat(5, 1fr)'>
        <GridItem rowSpan={4} border='1px solid blue'>left</GridItem>
        <GridItem rowSpan={4} colSpan={3} border='1px solid blue'>center</GridItem>
        <GridItem rowSpan={4} border='1px solid blue'>right</GridItem>
        <GridItem colSpan={5} border='1px solid blue'>bottom</GridItem>
    </Grid>
)