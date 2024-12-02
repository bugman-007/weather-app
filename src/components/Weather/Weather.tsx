/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCurrentWeather } from '@hooks/useCurrentWeather'
import type { State } from '@hooks/useUnits'
import {
	toCelsius,
	toFahrenheit,
	toKMH,
	toMbars,
	toMPH,
	toPSI,
} from '@utils/converters'
import { toHumanReadableTime } from '@utils/datetime'
import type { FC } from 'react'
import { WiBarometer, WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi'

type Props = State

export const Weather: FC<Props> = ({ city, pressure, speed, temperature }) => {
	const { data } = useCurrentWeather(city)
	return data ? (
		<>
			<h1 className='text-3xl'>
				{data?.name}, {data?.country}
			</h1>
			<div className='indicator'>
				<span className='p-2 text-lg shadow-lg indicator-item badge badge-error'>
					{temperature === 'C' ? (
						<span>{toCelsius(data!.tempMax)} C˚</span>
					) : (
						<span>{toFahrenheit(data!.tempMax)} F˚</span>
					)}
				</span>
				<div className='grid place-items-center w-60 h-60 rounded-full shadow-lg bg-base-300'>
					<span className='text-6xl'>
						{temperature === 'C' ? (
							<span>{toCelsius(data!.temp)} C˚</span>
						) : (
							<span>{toFahrenheit(data!.temp)} F˚</span>
						)}
					</span>
				</div>
				<span className='p-2 text-lg shadow-lg indicator-item indicator-start indicator-bottom badge badge-primary'>
					{temperature === 'C' ? (
						<span>{toCelsius(data!.tempMin)} C˚</span>
					) : (
						<span>{toFahrenheit(data!.tempMin)} F˚</span>
					)}
				</span>
			</div>
			<div className='flex space-x-4'>
				<div className='flex items-center'>
					<WiHumidity className='w-12 h-12' />
					<span className='text-lg'>{data!.humidity} %</span>
				</div>
				<div className='flex space-x-4'>
					{pressure === 'in' ? (
						<div className='flex items-center'>
							<WiBarometer className='w-12 h-12' />
							<span>{toPSI(data!.pressure)} psi</span>
						</div>
					) : (
						<div className='flex items-center'>
							<WiBarometer className='w-12 h-12' />
							<span>{toMbars(data!.pressure)} mbars</span>
						</div>
					)}
				</div>
				<div className='flex space-x-4'>
					<div className='flex items-center'>
						{speed === 'kmh' ? (
							<span>{toKMH(data!.windSpeed)} km/h</span>
						) : (
							<span>{toMPH(data!.windSpeed)} mph</span>
						)}
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center space-x-8 w-full'>
				<div className='flex items-center space-x-2'>
					<WiSunrise className='w-12 h-12' />
					<span className='text-lg'>
						{toHumanReadableTime(data!.sunrise, city, {
							hour: '2-digit',
							hour12: false,
							minute: '2-digit',
						})}
					</span>
				</div>
				<div className='flex items-center space-x-2'>
					<WiSunset className='w-12 h-12' />
					<span className='text-lg'>
						{toHumanReadableTime(data!.sunset, city, {
							hour: '2-digit',
							hour12: false,
							minute: '2-digit',
						})}
					</span>
				</div>
			</div>
		</>
	) : null
}
