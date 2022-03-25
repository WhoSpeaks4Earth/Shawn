import { Grid, GridItem } from "@chakra-ui/layout"


export const GameTable = () => {

    console.log('game table rendered')

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
                {/* <PlayerCards /> */}
                your cards
            </GridItem>
            <GridItem colSpan={5} p={4} border='1px solid blue'>bottom</GridItem>
        </Grid>
    )
}