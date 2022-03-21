import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { CardGame } from "./pages/CardGame";



export const App = () => (
  <ChakraProvider theme={theme}>
    <CardGame />
  </ChakraProvider>
)
