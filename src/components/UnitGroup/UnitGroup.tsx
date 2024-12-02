import { Action, State } from '@hooks/useUnits'
import type { FC } from 'react'
import { WiCelsius, WiFahrenheit } from 'react-icons/wi'

type Props = {
	onChange: (value: Action) => void
	units: Pick<State, 'pressure' | 'speed' | 'temperature' | 'volume'>
}

export const UnitGroup: FC<Props> = ({
	onChange,
	units: { pressure, speed, temperature, volume },
}) => {
	return (
		<div className='justify-between px-8 w-full btn-group'>
			<button
				className='flex-1 btn'
				onClick={() =>
					onChange({
						payload: pressure === 'mbars' ? 'in' : 'mbars',
						type: 'TOGGLE_PRESSURE',
					})
				}
			>
				{pressure === 'mbars' ? 'mbars' : 'in'}
			</button>
			<button
				className='flex-1 btn'
				onClick={() =>
					onChange({
						payload: speed === 'kmh' ? 'mph' : 'kmh',
						type: 'TOGGLE_SPEED',
					})
				}
			>
				{speed === 'kmh' ? 'kmh' : 'mph'}
			</button>
			<button
				className='flex-1 btn'
				onClick={() =>
					onChange({
						payload: temperature === 'C' ? 'F' : 'C',
						type: 'TOGGLE_TEMP',
					})
				}
			>
				{temperature === 'C' ? (
					<WiCelsius className='w-10 h-10' />
				) : (
					<WiFahrenheit className='w-10 h-10' />
				)}
			</button>
			<button
				className='flex-1 btn'
				onClick={() =>
					onChange({
						payload: volume === 'mm' ? 'in' : 'mm',
						type: 'TOGGLE_VOLUME',
					})
				}
			>
				{volume === 'mm' ? 'mm' : 'in'}
			</button>
		</div>
	)
}
