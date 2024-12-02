import { toHumanReadableTime } from './datetime'

const options: Intl.DateTimeFormatOptions = {
	hour: '2-digit',
	hour12: false,
	minute: '2-digit',
}

describe('datetime.ts', () => {
	test('prints human readable time for Bogota', () => {
		expect(toHumanReadableTime(1655025865, 'Bogota', options)).toEqual('04:24')
	})
	test('prints human readable time for Cairo', () => {
		expect(toHumanReadableTime(1655025865, 'Cairo', options)).toEqual('11:24')
	})
	test('prints human readable time for Kiev', () => {
		expect(toHumanReadableTime(1655025865, 'Kiev', options)).toEqual('12:24')
	})
	test('prints human readable time for Lawrence', () => {
		expect(toHumanReadableTime(1655025865, 'Lawrence', options)).toEqual(
			'04:24'
		)
	})
	test('prints human readable time for London', () => {
		expect(toHumanReadableTime(1655025865, 'London', options)).toEqual('10:24')
	})
	test('prints human readable time for Moscow', () => {
		expect(toHumanReadableTime(1655025865, 'Moscow', options)).toEqual('12:24')
	})
	test('prints human readable time for Paris', () => {
		expect(toHumanReadableTime(1655025865, 'Paris', options)).toEqual('11:24')
	})
	test('prints human readable time for Portland', () => {
		expect(toHumanReadableTime(1655025865, 'Portland', options)).toEqual(
			'02:24'
		)
	})
	test('prints human readable time for Shanghai', () => {
		expect(toHumanReadableTime(1655025865, 'Shanghai', options)).toEqual(
			'17:24'
		)
	})
	test('prints human readable time for Tokyo', () => {
		expect(toHumanReadableTime(1655025865, 'Tokyo', options)).toEqual('18:24')
	})
	test('prints human readable time for Tunis', () => {
		expect(toHumanReadableTime(1655025865, 'Tunis', options)).toEqual('10:24')
	})
})
