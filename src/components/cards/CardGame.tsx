import { SyntheticEvent, useState } from "react";
import { CardSelection } from "./CardSelection";
import { GameTable } from "./GameTable";


type view = 'new' | 'playing'

export const CardGame = () => {
    let [currentView, setView] = useState<view>('new')

    const switchView = (e: SyntheticEvent, switchTo:view) => {
        console.log(switchTo);
        setView('playing');
    }

    console.log(currentView)
    switch(currentView) {
        case 'new':
            return <CardSelection onReady={(e: SyntheticEvent) => switchView(e, 'playing')} />
        case 'playing':
            return <GameTable />
        default:
            return null
    }
}