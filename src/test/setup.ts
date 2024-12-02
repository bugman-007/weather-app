import '@testing-library/jest-dom'

import { setLogger } from 'react-query'
import { beforeAll } from 'vitest'

import { server } from '../mocks/server'

setLogger({
	error: () => ({}),
	log: console.log,
	warn: console.warn,
})

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
