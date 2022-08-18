import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { NavBar } from './components/ui/surfaces/NavBar'
import { formatCurrencies } from './helpers/currency';
import { IAPI } from './models/IApi';
import { ICurrencies } from './models/ICurrencies';
import { CurrencyConverter } from './pages/CurrencyConverter'

function App() {

  const executedRef = useRef(false);

  const [currencies, setCurrencies] = useState<{
    plain: IAPI[],
    formatted: ICurrencies
  }>({
    plain: [],
    formatted: {}
  });

  const fetchCurrencies = async () => {
    const response = await axios.get<IAPI[]>(import.meta.env.VITE_CASH_RATE_API);
    setCurrencies({
      plain: response.data,
      formatted: formatCurrencies(response.data)
    });
  }

  useEffect(() => {
    if (executedRef.current) {
      return;
    } else {
      fetchCurrencies();
      executedRef.current = true;
    }
  }, []);

  return (
    <div className="App">
      <NavBar currencies={currencies.plain} />
      <CurrencyConverter />
    </div>
  )
}

export default App
