export interface ICurrencies {
    [mainCurr: string]: {
        [subCurr: string]: string;
    };
}