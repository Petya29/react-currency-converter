import { FC, useState } from 'react';
import { TextField } from '../components/ui/inputs/TextField';
import { Container, Sizes } from '../components/ui/layout/Container';
import { Paper, Rounds } from '../components/ui/surfaces/Paper';

export const CurrencyConverter: FC = () => {

  const [sum, setSum] = useState<{ from: string, to: string }>({ from: '', to: '' });

  const handleChangeSumFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(prevSum => {
      return { ...prevSum, from: e.target.value }
    });
  }

  const handleChangeSumTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(prevSum => {
      return { ...prevSum, to: e.target.value }
    });
  }

  return (
    <Container maxWidth={Sizes.md}>
      <div className='mt-3 mx-16 flex flex-col items-center'>
        <Paper rounded={Rounds.md}>
          <div className='flex items-center'>
            <TextField
              value={sum.from}
              onChange={handleChangeSumFrom}
            />
            =
            <TextField
              value={sum.to}
              onChange={handleChangeSumTo}
            />
          </div>
        </Paper>
      </div>
    </Container>
  )
}
