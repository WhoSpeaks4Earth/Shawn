import { SyntheticEvent, useState } from "react";
import { ICard } from "../../models/ICard";
import { ICardGame } from "../../models/ICardGame";
import { CardSelection } from "./CardSelection";
import { GameTable } from "./GameTable";


export const CardGame = () => {
    const [cardGame, setCardGame] = useState<ICardGame>({
        view: 'new',
        playerHand: [],
        opponentHand: []
    });


    const setupNewGame = (e: SyntheticEvent, playerHand: ICard[]) => {
        setCardGame({...cardGame, view: 'playing', playerHand});
    }

    switch(cardGame.view) {
        case 'new':
            return <CardSelection onReady={(e: SyntheticEvent, cardSelection: ICard[]) => setupNewGame(e, cardSelection)} />
        case 'playing':
            return <GameTable game={cardGame} />
        default:
            return null
    }
}