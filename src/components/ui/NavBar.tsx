import { FC } from 'react';
import { formatExchangeRates } from '../../helpers/currency';
import { IAPI } from '../../models/IApi';

interface INavBarProps {
    currencies: IAPI[]
}

const today = new Date().toISOString().split('T')[0];

export const NavBar: FC<INavBarProps> = ({ currencies }) => {
    return (
        <header className='bg-[#1e1e1e]'>
            <div className='w-ful font-bold flex justify-between items-center p-4'>
                <div className='text-2xl'>
                    CurrencyConverter
                </div>
                <div>
                    <div>Current date: {today}</div>
                    <div>Exchange rates: {formatExchangeRates(currencies)}</div>
                </div>
            </div>
        </header>
    )
}
