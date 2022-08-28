import { ICurrencies, IFormValues } from "../../models";
import { Select, TextField } from "../ui/inputs";
import { Paper, PaperRounds } from "../ui/surfaces";

interface IConverterFormProps {
    currencies: ICurrencies,
    formValues: IFormValues,
    handleChangeForm: (value: string, key: string) => void
}

export const ConverterForm = ({
    currencies,
    formValues,
    handleChangeForm
}: IConverterFormProps) => {
    return (
        <Paper rounded={PaperRounds.md}>
            <div className='flex items-center justify-between mb-3'>
                <Select
                    label='currency'
                    value={formValues.currFrom}
                    defaultValue={'hidden'}
                    onChange={e => handleChangeForm((e.target as HTMLSelectElement).value, 'currFrom')}
                    style={{ width: '150px' }}
                >
                    {Object.keys(currencies).map(currency => (
                        <option
                            value={currency}
                            key={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </Select>
                <Select
                    label='currency'
                    value={formValues.currTo}
                    defaultValue={'hidden'}
                    onChange={e => handleChangeForm((e.target as HTMLSelectElement).value, 'currTo')}
                    style={{ width: '150px' }}
                >
                    {Object.keys(currencies).map(currency => (
                        <option
                            value={currency}
                            key={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </Select>
            </div>
            <div className='flex items-center'>
                <TextField
                    type='number'
                    label='Sum from'
                    value={formValues.sumFrom}
                    onChange={e => handleChangeForm((e.target as HTMLInputElement).value, 'sumFrom')}
                />
                =
                <TextField
                    type='number'
                    label='Sum to'
                    value={formValues.sumTo}
                    onChange={e => handleChangeForm((e.target as HTMLInputElement).value, 'sumTo')}
                />
            </div>
        </Paper>
    )
}
