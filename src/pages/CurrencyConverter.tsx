import { FC } from 'react';
import { Container } from '../components/ui/layout/Container';
import { Paper } from '../components/ui/surfaces/Paper';

export const CurrencyConverter: FC = () => {
  return (
    <Container maxWidth='sm'>
      <div className='mt-3 mx-16 flex flex-col items-center'>
        <Paper>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Pariatur numquam ullam amet impedit libero, ad in aliquam,
          totam tempore officia aliquid qui veniam eum, harum exercitationem blanditiis illum quos rerum.
        </Paper>
      </div>
    </Container>
  )
}
