export type OWMCurrentRawResponse = {
	base: 'stations'
	clouds: Clouds
	cod: string
	coord: Coord
	dt: number
	id: number
	main: Main
	name: string
	sys: Sys
	timezone: number //
	weather: Array<Weather>
	wind: Wind
	visibility: number
}
export type OWMForecastRawResponse = {
	city: {
		coord: Coord
		country: string
		id: number
		name: string
		population: number
		sunrise: number
		sunset: number
		timezone: number
	}
	cnt: number
	cod: string
	list: Array<Forecast>
	message: number
}

type Clouds = {
	all: number
}
type Coord = {
	lat: number
	lon: number
}

export type Forecast = {
	clouds: Clouds
	dt: number
	dt_text: string
	main: Main & {
		grnd_level: number
		sea_level: number
		temp_kf: number
	}
	pop: number
	rain: { '3h': number }
	sys: { pod: 'n' }
	weather: Array<Weather>
	wind: Wind & {
		gust: number
	}
	visibility: number
}

type Main = {
	feels_like: number
	humidity: number
	pressure: number
	temp: number
	temp_max: number
	temp_min: number
}

type Sys = {
	country: string
	id: number
	sunrise: number
	sunset: number
	type: number // possible enum
}

type Wind = {
	deg: number
	speed: number
}

type Weather = {
	id: number
	main: string // could be an enum
	description: string
	icon: string // could be an enum
}

export type WeatherError = {
	message: string
	status: number
}

export type CurrentWeather = {
	description: string
	country: string
	feelsLike: number
	humidity: number
	icon: string
	name: string
	pressure: number
	sunrise: number
	sunset: number
	temp: number
	tempMax: number
	tempMin: number
	windDeg: number
	windSpeed: number
}

export type HourlyForecast = Pick<Forecast, 'dt' | 'pop'> & {
	feelsLike: number
	humidity: number
	icon: string
	main: string
	pressure: number
	temp: number
	tempMax: number
	tempMin: number
	windDeg: number
	windGust: number
	windSpeed: number
}

export type City =
	| 'Bogota'
	| 'Cairo'
	| 'Kiev'
	| 'Lawrence'
	| 'London'
	| 'Paris'
	| 'Portland'
	| 'Moscow'
	| 'Shanghai'
	| 'Tokyo'
	| 'Tunis'
export type Pressure = 'in' | 'mbars'
export type Speed = 'mph' | 'kmh'
export type Temperature = 'C' | 'F'
export type Volume = 'in' | 'mm'
