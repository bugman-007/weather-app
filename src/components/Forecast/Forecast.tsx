import { useForecast } from '@hooks/useForecast'
import type { State } from '@hooks/useUnits'
import { toCelsius, toFahrenheit, toMbars, toPSI } from '@utils/converters'
import { toHumanReadableTime } from '@utils/datetime'
import type { FC } from 'react'

type Props = State

export const Forecast: FC<Props> = ({ city, pressure, temperature }) => {
	const { data } = useForecast(city)
	return (
		<div className='overflow-x-auto max-w-xs md:w-full md:max-w-2xl lg:px-8 lg:max-w-full'>
			<table className='table w-full table-compact md:table-normal'>
				<thead>
					<tr>
						<th></th>
						<th>Temp</th>
						<th>Feels Like</th>
						<th>Min</th>
						<th>Max</th>
						<th>Humidity</th>
						<th>Precipitation</th>
						<th>Pressure</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map(
							({
								dt,
								feelsLike,
								humidity,
								icon,
								main,
								pop,
								pressure: ps,
								temp,
								tempMax,
								tempMin,
							}) => (
								<tr key={dt}>
									<th>
										<span>
											{toHumanReadableTime(dt, city, {
												weekday: 'short',
											})}
										</span>
										<img
											alt={main}
											src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
										/>
									</th>
									<th>
										{temperature === 'C'
											? `${toCelsius(temp)} C˚`
											: `${toFahrenheit(temp)} F˚`}
									</th>
									<th>
										{temperature === 'C'
											? `${toCelsius(feelsLike)} C˚`
											: `${toFahrenheit(feelsLike)} F˚`}
									</th>
									<th>
										{temperature === 'C'
											? `${toCelsius(tempMin)} C˚`
											: `${toFahrenheit(tempMin)} F˚`}
									</th>
									<th>
										{temperature === 'C'
											? `${toCelsius(tempMax)} C˚`
											: `${toFahrenheit(tempMax)} F˚`}
									</th>
									<th>{humidity}%</th>
									<th>{pop * 100}%</th>
									<th>{pressure === 'mbars' ? toMbars(ps) : toPSI(ps)}</th>
								</tr>
							)
						)}
				</tbody>
			</table>
		</div>
	)
}
