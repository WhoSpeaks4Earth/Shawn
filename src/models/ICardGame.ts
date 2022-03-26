import { ICard } from "./ICard";


export interface ICardGame {
    view: 'new' | 'playing',
    playerHand: ICard[],
    opponentHand: ICard[]
}