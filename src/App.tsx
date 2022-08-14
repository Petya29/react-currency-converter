import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { NavBar } from './components/ui/NavBar'
import { formatCurrencies } from './helpers/currency';
import { IAPI } from './models/IApi';
import { ICurrencies } from './models/ICurrencies';
import { CurrencyConverter } from './pages/CurrencyConverter'

function App() {

  const executedRef = useRef(false);

  const [currencies, setCurrencies] = useState<ICurrencies>({});

  const fetchCurrencies = async () => {
    const response = await axios.get<IAPI[]>(import.meta.env.VITE_CASH_RATE_API);
    setCurrencies(formatCurrencies(response.data));
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
      <NavBar currencies={currencies} />
      <CurrencyConverter />
    </div>
  )
}

export default App
