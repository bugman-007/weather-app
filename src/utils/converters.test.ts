import {
	toCelsius,
	toFahrenheit,
	toInches,
	toKMH,
	toMbars,
	toMM,
	toMPH,
	toPSI,
} from './converters'

const hpa = 1500
const kelvin = 299.2
const mm = 100000
const mps = 5

describe('converters.ts', () => {
	test('K --> C', () => {
		expect(toCelsius(kelvin)).toEqual(26)
	})

	test('K --> F', () => {
		expect(toFahrenheit(kelvin)).toEqual(79)
	})

	test('mm --> in', () => {
		expect(toInches(mm)).toEqual(6)
	})

	test('mm --> mm', () => {
		expect(toMM(mm)).toEqual(mm)
	})

	test('m/s --> km/h', () => {
		expect(toKMH(mps)).toEqual(18)
	})

	test('m/s --> mph', () => {
		expect(toMPH(mps)).toEqual(11)
	})

	test('hPa --> psi', () => {
		expect(toPSI(hpa)).toEqual(22)
	})

	test('hPa --> mbar', () => {
		expect(toMbars(hpa)).toEqual(hpa)
	})
})
