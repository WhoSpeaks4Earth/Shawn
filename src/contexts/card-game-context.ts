import { createContext } from "react";
import { ICard } from "../models/ICard";

export type CardGameContextType = {
    playerCards: ICard[],
    addPlayerCard: (c: ICard) => void
}

export const CardGameContext = createContext<CardGameContextType>({
    playerCards: [],
    addPlayerCard: () => {}
});
