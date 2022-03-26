import { SyntheticEvent, useState } from "react";
import { ICard } from "../../models/ICard";
import { ICardGame } from "../../models/ICardGame";
import { CardSelection } from "./CardSelection";
import { GameTable } from "./GameTable";

type view = 'new' | 'playing';



export const CardGame = () => {
    const [cardGame, setCardGame] = useState<ICardGame>({
        view: 'new',
        playerHand: [],
        opponentHand: []
    });
    

    const switchView = (e: SyntheticEvent, switchTo:view) => {
        setCardGame({...cardGame, view: switchTo});
    }

    switch(cardGame.view) {
        case 'new':
            return <CardSelection onReady={(e: SyntheticEvent) => switchView(e, 'playing')} />
        case 'playing':
            return <GameTable game={cardGame} />
        default:
            return null
    }
}