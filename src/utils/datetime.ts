import { City } from '@interfaces/weather'

const timeZoneMap = {
	Bogota: 'America/Bogota',
	Cairo: 'Africa/Cairo',
	Kiev: 'Europe/Kiev',
	Lawrence: 'America/Chicago',
	London: 'Europe/London',
	Moscow: 'Europe/Moscow',
	Paris: 'Europe/Paris',
	Portland: 'America/Los_Angeles',
	Shanghai: 'Asia/Shanghai',
	Tokyo: 'Asia/Tokyo',
	Tunis: 'Africa/Tunis',
}

export const toHumanReadableTime = (
	unixTimestamp: number,
	city: City,
	options?: Intl.DateTimeFormatOptions
) => {
	const { locale } = new Intl.DateTimeFormat().resolvedOptions()
	return new Intl.DateTimeFormat(locale, {
		timeZone: timeZoneMap[city],
		...(options ?? {}),
	}).format(new Date(unixTimestamp * 1000))
}
