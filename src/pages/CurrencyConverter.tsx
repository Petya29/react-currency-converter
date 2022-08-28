import { useEffect, useState } from 'react';
import { ConverterForm } from '../components/form/ConverterForm';
import { Container, ContainerSizes } from '../components/ui/layout';
import { convert } from '../helpers/currency';
import { ICurrencies, IFormValues } from '../models';

interface ICurrencyConverterProps {
  currencies: ICurrencies
}

export const CurrencyConverter = ({ currencies }: ICurrencyConverterProps) => {

  const [formValues, setFormValues] = useState<IFormValues>({
    currFrom: '',
    currTo: '',
    sumFrom: '',
    sumTo: '',
    convertNeeded: false
  });

  const handleChangeForm = (value: string, key: string) => {
    setFormValues(prevValues => {
      return {
        ...prevValues,
        [key]: value,
        convertNeeded: true
      }
    });
  }

  useEffect(() => {
    if (!formValues.convertNeeded || formValues.currFrom === '' || formValues.currTo === '') return;

    const conversationResult = convert(
      formValues.currFrom,
      formValues.currTo,
      formValues.sumFrom ? formValues.sumFrom : formValues.sumTo,
      currencies
    );

    if (conversationResult !== 'Triple conversion is not supported') { // TODO add error type
      setFormValues(prevValues => {
        return {
          ...prevValues,
          [formValues.sumFrom ? 'sumTo' : 'sumFrom']: conversationResult,
          convertNeeded: false
        }
      });
    }
  }, [formValues.convertNeeded]);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

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
