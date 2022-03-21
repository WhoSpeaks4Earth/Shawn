import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { CardGame } from "./components/cards/CardGame";



export const App = () => (
  <ChakraProvider theme={theme}>
    <CardGame />
  </ChakraProvider>
)
