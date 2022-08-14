import { IAPI } from "../models/IApi";
import { ICurrencies } from "../models/ICurrencies";

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