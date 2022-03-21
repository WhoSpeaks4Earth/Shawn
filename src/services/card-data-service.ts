import { ICard } from '../models/ICard';
import { cardData } from './card-data';

interface ICardDataService {
    allCards: ICard[],
    loadCards: () => void
}

export class CardDataService implements ICardDataService {

    readonly allCards: ICard[] = [];

    loadCards(): void {
        this.allCards.push(...cardData);
    }


}