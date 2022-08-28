import { useState } from 'react';
import { ConverterForm } from '../components/form/ConverterForm';
import { Container, ContainerSizes } from '../components/ui/layout';
import { ICurrencies, IFormValues } from '../models';

interface ICurrencyConverterProps {
  currencies: ICurrencies
}

export const CurrencyConverter = ({ currencies }: ICurrencyConverterProps) => {

  const [formValues, setFormValues] = useState<IFormValues>({
    currFrom: '',
    currTo: '',
    sumFrom: '',
    sumTo: ''
  })

  const handleChangeForm = (value: string, key: string) => {
    setFormValues(prevValues => {
      return { ...prevValues, [key]: value }
    });
  }

  return (
    <Container maxWidth={ContainerSizes.md}>
      <div className='mt-52 mx-16 flex flex-col items-center'>
        <ConverterForm
          currencies={currencies}
          formValues={formValues}
          handleChangeForm={handleChangeForm}
        />
      </div>
    </Container>
  )
}
