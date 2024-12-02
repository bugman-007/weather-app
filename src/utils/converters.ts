const K = 273.15

export const toCelsius = (kelvin: number) => Math.round(kelvin - K)
export const toFahrenheit = (kelvin: number) =>
	Math.round((kelvin - K) * 1.8 + 32)
export const toInches = (mm: number) => Math.round(mm / 16387.064)
export const toKMH = (mps: number) => Math.round(mps * 3.6)
export const toMbars = (hPa: number) => Math.round(hPa)
export const toMM = (mm: number) => Math.round(mm)
export const toMPH = (mps: number) => Math.round(mps / 0.44704)
export const toPSI = (hPa: number) => Math.round(hPa * 0.0145037738)
