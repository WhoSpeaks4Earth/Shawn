import { Box, SimpleGrid } from "@chakra-ui/react";

export const CardTableGrid = () => (
    <SimpleGrid columns={3} spacing={1}>
        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>

        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>

        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>
        <Box border='1px dashed gray' h='200px'></Box>
    </SimpleGrid>
)