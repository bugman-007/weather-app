import {
	CurrentWeather,
	HourlyForecast,
	OWMCurrentRawResponse,
	OWMForecastRawResponse,
	WeatherError,
} from '@interfaces/weather'

if (typeof import.meta.env.VITE_OWM_API_KEY === 'undefined') {
	throw new Error(`
  VITE_OWM_API_KEY not defined!
    - Check .env.local.
    - Check environment variables on Vercel.
  `)
}

export const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchCurrentWeatherByCity = async (
	city: string
): Promise<CurrentWeather | WeatherError> => {
	const res = await fetch(
		`${BASE_URL}/weather?q=${city}&appid=${import.meta.env.VITE_OWM_API_KEY}`
	)

	if (!res.ok) {
		return {
			message: res.statusText,
			status: res.status,
		}
	}

	const {
		main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
		name,
		sys: { country, sunrise, sunset },
		weather: [{ description, icon }],
		wind: { deg, speed },
	} = (await res.json()) as OWMCurrentRawResponse

	return {
		description,
		country,
		feelsLike: feels_like,
		humidity,
		icon,
		name,
		pressure,
		sunrise,
		sunset,
		temp,
		tempMax: temp_max,
		tempMin: temp_min,
		windDeg: deg,
		windSpeed: speed,
	}
}

export const fetchHourlyForecastByCity = async (
	city: string
): Promise<Array<HourlyForecast> | WeatherError> => {
	const res = await fetch(
		`${BASE_URL}/forecast?q=${city}&appid=${
			import.meta.env.VITE_OWM_API_KEY
		}&cnt=9` // cnt=number - limits number of timestamps returned in results
	)

	if (!res.ok) {
		return {
			message: res.statusText,
			status: res.status,
		}
	}

	const { list } = (await res.json()) as OWMForecastRawResponse

	// First check that their is forecast data
	// Then check if >= 9 (full day 3h forecast data)
	// If it is not then return what is available.
	const forecast =
		list.length > 0 && list.length >= 9
			? list.slice(0, 9)
			: list.slice(0, list.length)

	return forecast.map(
		({
			dt,
			main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
			pop,
			rain,
			weather: [{ icon, main }],
			wind: { deg, gust, speed },
		}) => ({
			dt,
			feelsLike: feels_like,
			humidity,
			icon,
			main,
			pop,
			pressure,
			rain,
			temp,
			tempMax: temp_max,
			tempMin: temp_min,
			windDeg: deg,
			windGust: gust,
			windSpeed: speed,
		})
	)
}
