import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => (

    <Container maxW='container.xl'>
        <Image src='https://i1.sndcdn.com/visuals-000011092927-FHo4hC-t2480x520.jpg' alt='Banner' />
        <Flex gap={4}>
            <Box>Programming</Box>
            <Box><Link to='/cardgame'>Card Game</Link></Box>
            <Box>Music</Box>
            <Box>Contact</Box>
        </Flex>
    </Container>
)