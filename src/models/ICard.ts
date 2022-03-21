
type ICardRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ICard {
    name: string,
    rankIncomeStatement: ICardRank,
    rankBalanceSheet: ICardRank,
    rankCashFlow: ICardRank,
    rankQualitative: ICardRank, // brand loyalty, # lawsuits, leadership personalities, etc
}
