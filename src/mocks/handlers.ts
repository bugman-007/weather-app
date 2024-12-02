import { BASE_URL } from '@services/owm'
import type { RestHandler } from 'msw'
import { rest } from 'msw'

import { forecastMockData, weatherMockData } from './mockData'

export const handlers: Array<RestHandler> = [
	rest.get(`${BASE_URL}/weather`, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(weatherMockData))
	}),
	rest.get(`${BASE_URL}/forecast`, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(forecastMockData))
	}),
]
