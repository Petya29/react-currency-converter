import { useState } from 'react';
import { Select, TextField } from '../components/ui/inputs';
import { Container, ContainerSizes } from '../components/ui/layout';
import { Paper, PaperRounds } from '../components/ui/surfaces';

export const CurrencyConverter = () => {

  const [currFrom, setCurrFrom] = useState<string>('');
  const [sum, setSum] = useState<{ from: string, to: string }>({ from: '', to: '' });

  const handleChangeCurrFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
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
          <div className='flex items-center'>
            <TextField
              label='text'
              value={sum.to}
              onChange={(e) => handleChangeSum(e, 'to')}
            />
            =
            <TextField
              variant='lined'
              label='text'
              value={sum.from}
              onChange={(e) => handleChangeSum(e, 'from')}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Select
              label='currency'
              value={currFrom}
              defaultValue={'hidden'}
              onChange={handleChangeCurrFrom}
              styles={{ marginTop: 14 }}
            >
              <option hidden disabled value={'hidden'}></option>
              <option value={'UAH'}>UAH</option>
              <option value={'USD'}>USD</option>
              <option value={'EUR'}>EUR</option>
            </Select>
            <Select
              label='currency'
              value={currFrom}
              defaultValue={'hidden'}
              onChange={handleChangeCurrFrom}
              styles={{ marginTop: 14 }}
            >
              <option hidden disabled value={'hidden'}></option>
              <option value={'UAH'}>UAH</option>
              <option value={'USD'}>USD</option>
              <option value={'EUR'}>EUR</option>
            </Select>
          </div>
        </Paper>
      </div>
    </Container>
  )
}
