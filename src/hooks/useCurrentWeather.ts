import type { CurrentWeather, WeatherError } from '@interfaces/weather'
import type { UseQueryResult } from '@services/data'
import { useQuery } from '@services/data'
import { fetchCurrentWeatherByCity } from '@services/owm'

type UseCurrentWeatherHook = (
	city?: string
) => UseQueryResult<CurrentWeather, WeatherError>

export const useCurrentWeather: UseCurrentWeatherHook = (
	city = 'Lawrence, Kansas'
) => {
	return useQuery(['current', { city }], () => fetchCurrentWeatherByCity(city))
}
