import { City } from '@interfaces/weather'
import type { FC } from 'react'
import type { Options } from 'react-select'
import ReactSelect, { components } from 'react-select'

type Props = {
	onChange: (value: City) => void
	value: City
}

const options: Options<{ label: City; value: City }> = [
	{ label: 'Bogota', value: 'Bogota' },
	{ label: 'Cairo', value: 'Cairo' },
	{ label: 'Kiev', value: 'Kiev' },
	{ label: 'Lawrence', value: 'Lawrence' },
	{ label: 'London', value: 'London' },
	{ label: 'Moscow', value: 'Moscow' },
	{ label: 'Paris', value: 'Paris' },
	{ label: 'Portland', value: 'Portland' },
	{ label: 'Shanghai', value: 'Shanghai' },
	{ label: 'Tokyo', value: 'Tokyo' },
	{ label: 'Tunis', value: 'Tunis' },
]

export const Select: FC<Props> = ({ onChange, value }) => {
	return (
		<ReactSelect
			className='w-full max-w-xs text-lg select select-accent'
			components={{
				ClearIndicator: undefined,
				Control: props => {
					return (
						<components.Control
							{...props}
							className='!bg-transparent !border-primary'
						/>
					)
				},
				Menu: ({ children, ...rest }) => {
					return (
						<components.Menu
							{...rest}
							className='!z-50 !w-10/12 !bg-transparent !border !border-primary'
						>
							{children}
						</components.Menu>
					)
				},
				Option: props => {
					return (
						<components.Option
							{...props}
							className='!text-primary !bg-base-200'
						/>
					)
				},
				SelectContainer: ({ children, ...rest }) => {
					return (
						<components.SelectContainer {...rest} className='px-8 w-full'>
							{children}
						</components.SelectContainer>
					)
				},
				SingleValue: ({ children, ...rest }) => {
					return (
						<components.SingleValue {...rest} className='!text-accent'>
							{children}
						</components.SingleValue>
					)
				},
				ValueContainer: ({ children, ...rest }) => {
					return (
						<components.ValueContainer {...rest} className='bg-transparent'>
							{children}
						</components.ValueContainer>
					)
				},
			}}
			id='cities'
			name='cities'
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			onChange={option => onChange(option!.value)}
			options={options}
			value={options.find(({ value: city }) => city === value)}
		/>
	)
}
