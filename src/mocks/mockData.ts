import type {
	OWMCurrentRawResponse,
	OWMForecastRawResponse,
} from '@interfaces/weather'

export const weatherMockData: OWMCurrentRawResponse = {
	base: 'stations',
	clouds: {
		all: 0,
	},
	cod: '200',
	coord: {
		lat: 38.9717,
		lon: -95.2353,
	},
	dt: 1656718325,
	id: 4274277,
	main: {
		feels_like: 304.09,
		humidity: 67,
		pressure: 1015,
		temp: 301.51,
		temp_max: 303.58,
		temp_min: 298.72,
	},
	name: 'Lawrence',
	sys: {
		country: 'US',
		id: 4784,
		sunrise: 1656673139,
		sunset: 1656726621,
		type: 1,
	},
	timezone: -18000,
	weather: [
		{
			description: 'clear sky',
			icon: '01d',
			id: 800,
			main: 'Clear',
		},
	],
	wind: {
		deg: 30,
		speed: 3.09,
	},
	visibility: 10000,
}

export const forecastMockData: OWMForecastRawResponse = {
	city: {
		coord: {
			lat: 38.9717,
			lon: -95.2353,
		},
		country: 'US',
		id: 4274277,
		name: 'Lawrence',
		population: 87643,
		sunrise: 1656673139,
		sunset: 1656726621,
		timezone: -18000,
	},
	cnt: 40,
	cod: '200',
	list: [
		{
			clouds: { all: 71 },
			dt: 1656730800,
			dt_text: '2022-07-02 03:00:00',
			main: {
				feels_like: 299.2,
				grnd_level: 985,
				humidity: 76,
				pressure: 1015,
				sea_level: 1015,
				temp: 299.2,
				temp_kf: 4.14,
				temp_max: 299.2,
				temp_min: 295.06,
			},
			pop: 0.99,
			rain: { '3h': 3.19 },
			sys: { pod: 'n' },
			weather: [
				{
					description: 'moderate rain',
					icon: '10n',
					id: 501,
					main: 'Rain',
				},
			],
			wind: {
				deg: 79,
				gust: 4.57,
				speed: 1.77,
			},
			visibility: 10000,
		},
		{
			clouds: { all: 86 },
			dt: 1656741600,
			dt_text: '2022-07-02 06:00:00',
			main: {
				feels_like: 297.48,
				grnd_level: 986,
				humidity: 86,
				pressure: 1016,
				sea_level: 1016,
				temp: 296.81,
				temp_kf: 2.23,
				temp_max: 296.81,
				temp_min: 294.58,
			},
			pop: 0.99,
			rain: { '3h': 0.34 },
			sys: { pod: 'n' },
			weather: [
				{
					description: 'light rain',
					icon: '10n',
					id: 500,
					main: 'Rain',
				},
			],
			wind: {
				deg: 287,
				gust: 2.64,
				speed: 2.11,
			},
			visibility: 10000,
		},
		{
			clouds: { all: 50 },
			dt: 165672400,
			dt_text: '2022-07-02 09:00:00',
			main: {
				feels_like: 293.16,
				grnd_level: 985,
				humidity: 98,
				pressure: 1015,
				sea_level: 1015,
				temp: 292.6,
				temp_kf: 0,
				temp_max: 292.6,
				temp_min: 292.6,
			},
			pop: 0.62,
			rain: { '3h': 0.66 },
			sys: { pod: 'n' },
			weather: [
				{
					description: 'light rain',
					icon: '10n',
					id: 500,
					main: 'Rain',
				},
			],
			wind: {
				deg: 70,
				gust: 8.53,
				speed: 3.7,
			},
			visibility: 10000,
		},
	],
	message: 0,
}
