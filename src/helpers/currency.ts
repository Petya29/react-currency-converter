import { IAPI } from "../models/IApi";
import { ICurrencies } from "../models/ICurrencies";

export const formatExchangeRates = (currencies: IAPI[]): string => {
    try {
        const USD = currencies.findIndex(curr => curr.ccy === 'USD');
        const EUR = currencies.findIndex(curr => curr.ccy === 'EUR');

        const USDtoString = `USD ${Number(currencies[USD].buy).toFixed(1)}/${Number(currencies[USD].sale).toFixed(1)}`;
        const EURtoString = `EUR ${Number(currencies[EUR].buy).toFixed(1)}/${Number(currencies[EUR].sale).toFixed(1)}`;

        return `${USDtoString} ${EURtoString}`;
    } catch (err) {
        return '';
    }
}

export const formatCurrencies = (api: IAPI[]): ICurrencies => {
    const currencies = {} as ICurrencies;

    for (const currency of api) {
        if (currencies.hasOwnProperty(currency.ccy)) {
            currencies[currency.ccy][currency.base_ccy] = currency.buy;
        } else {
            currencies[currency.ccy] = {
                [currency.base_ccy]: currency.buy
            }
        }
        if (currencies.hasOwnProperty(currency.base_ccy)) {
            currencies[currency.base_ccy][currency.ccy] = String(1 / +currency.sale);
        } else {
            currencies[currency.base_ccy] = {
                [currency.ccy]: String(1 / +currency.sale)
            }
        }
    }

    return currencies;
}

export const doubleConvert = (from: string, to: string, sum: string, currencies: ICurrencies): string => {
    for (const currency in currencies) {
        const iterableCurr = currencies[currency];
        if (iterableCurr.hasOwnProperty(from) && iterableCurr.hasOwnProperty(to)) {
            const firstConvert = +sum * +currencies[from][currency];
            return String(firstConvert * +iterableCurr[to]);
        }
    }

    return 'Triple conversion is not supported';
}

export const convert = (from: string, to: string, sum: string, currencies: ICurrencies): string => {
    if (from === to) return sum;

    if (!currencies.hasOwnProperty(from) || !currencies[from].hasOwnProperty(to)) {
        return doubleConvert(from, to, sum, currencies);
    }

    return String(+sum * +currencies[from][to]);
}