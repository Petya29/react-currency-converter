import { useState } from 'react';
import { Select, TextField } from '../components/ui/inputs';
import { Container, ContainerSizes } from '../components/ui/layout';
import { Paper, PaperRounds } from '../components/ui/surfaces';

export const CurrencyConverter = () => {

  const [currFrom, setCurrFrom] = useState<string>('');
  const [currTo, setCurrTo] = useState<string>('');
  const [sum, setSum] = useState<{ from: string, to: string }>({ from: '', to: '' });

  const handleChangeCurrFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrFrom(e.target.value);
  }

  const handleChangeCurrTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrTo(e.target.value);
  }

  const handleChangeSum = (e: React.FormEvent<HTMLInputElement>, key: 'from' | 'to') => {
    setSum(prevSum => {
      // @ts-ignore
      return { ...prevSum, [key]: e.target.value }
    });
  }

  return (
    <Container maxWidth={ContainerSizes.md}>
      <div className='mt-52 mx-16 flex flex-col items-center'>
        <Paper rounded={PaperRounds.md}>
          <div className='flex items-center justify-between mb-3'>
            <Select
              label='currency'
              value={currFrom}
              defaultValue={'hidden'}
              onChange={handleChangeCurrFrom}
              style={{ width: '150px' }}
            >
              <option value={'UAH'}>UAH</option>
              <option value={'USD'}>USD</option>
              <option value={'EUR'}>EUR</option>
            </Select>
            <Select
              label='currency'
              value={currTo}
              defaultValue={'hidden'}
              onChange={handleChangeCurrTo}
              style={{ width: '150px' }}
            >
              <option value={'UAH'}>UAH</option>
              <option value={'USD'}>USD</option>
              <option value={'EUR'}>EUR</option>
            </Select>
          </div>
          <div className='flex items-center'>
            <TextField
              label='text'
              value={sum.to}
              onChange={(e) => handleChangeSum(e, 'to')}
            />
            =
            <TextField
              label='text'
              value={sum.from}
              onChange={(e) => handleChangeSum(e, 'from')}
            />
          </div>
        </Paper>
      </div>
    </Container>
  )
}
