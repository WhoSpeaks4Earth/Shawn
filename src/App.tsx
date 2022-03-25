import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { CardGame } from "./components/cards/CardGame";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CardSelection } from "./components/cards/CardSelection";
import { GameTable } from "./components/cards/GameTable";
import { Home } from "./components/home/Home";



export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="cardgame" element={<CardGame />}>
          </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
