import type { HourlyForecast, WeatherError } from '@interfaces/weather'
import type { UseQueryResult } from '@services/data'
import { useQuery } from '@services/data'
import { fetchHourlyForecastByCity } from '@services/owm'

type UseForecastHook = (
	city?: string
) => UseQueryResult<Array<HourlyForecast>, WeatherError>

export const useForecast: UseForecastHook = (city = 'Lawrence, Kansas') => {
	return useQuery(['forecast', { city }], () => fetchHourlyForecastByCity(city))
}
