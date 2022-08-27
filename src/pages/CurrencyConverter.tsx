import { useState } from 'react';
import { TextField } from '../components/ui/inputs';
import { Container, ContainerSizes } from '../components/ui/layout';
import { Paper, PaperRounds } from '../components/ui/surfaces';

export const CurrencyConverter = () => {

  const [sum, setSum] = useState<{ from: string, to: string }>({ from: '', to: '' });

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
              variant='lined'
              label='text'
              placeholder='input'
              value={sum.from}
              onChange={(e) => handleChangeSum(e, 'from')}
            />
            =
            <TextField
              label='text'
              placeholder='input'
              value={sum.to}
              onChange={(e) => handleChangeSum(e, 'to')}
            />
          </div>
        </Paper>
      </div>
    </Container>
  )
}
