import type {
	City,
	Pressure,
	Speed,
	Temperature,
	Volume,
} from '@interfaces/weather'
import type { Dispatch, Reducer } from 'react'
import { useReducer } from 'react'

export type Action =
	| { payload: City; type: 'CHANGE_CITY' }
	| { payload: Pressure; type: 'TOGGLE_PRESSURE' }
	| { payload: Speed; type: 'TOGGLE_SPEED' }
	| { payload: Temperature; type: 'TOGGLE_TEMP' }
	| { payload: Volume; type: 'TOGGLE_VOLUME' }

export type State = {
	city: City
	pressure: Pressure
	speed: Speed
	temperature: Temperature
	volume: Volume
}

const reducer: Reducer<State, Action> = (state, { payload, type }) => {
	switch (type) {
		case 'CHANGE_CITY':
			return { ...state, city: payload }
		case 'TOGGLE_PRESSURE':
			return { ...state, pressure: payload }
		case 'TOGGLE_SPEED':
			return { ...state, speed: payload }
		case 'TOGGLE_TEMP':
			return { ...state, temperature: payload }
		case 'TOGGLE_VOLUME':
			return { ...state, volume: payload }
		default:
			return state
	}
}

const initialState: State = {
	city: 'Lawrence',
	pressure: 'mbars',
	speed: 'kmh',
	temperature: 'C',
	volume: 'mm',
}

type UseUnitsHook = () => [State, Dispatch<Action>]

export const useUnits: UseUnitsHook = () => {
	return useReducer(reducer, initialState)
}
