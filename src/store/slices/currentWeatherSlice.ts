import {createSlice} from '@reduxjs/toolkit'

type currentCity = {
	city: string,
	startTrip: string,
	endTrip: string,
	weatherOnTrip: object[],
	currentWeather: object[],
}

const initialState: currentCity = {
	city: "",
	startTrip: "",
	endTrip: "",
	weatherOnTrip: [],
	currentWeather: [],
}

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		setTripData: (state, {payload: {startTrip, endTrip, city}}) => {
			return {
				...state,
				city,
				startTrip,
				endTrip,
			}
		},

		setWeatherOnTrip: (state, action) => {
			return {
				...state,
				weatherOnTrip: action.payload,
			}
		},

		setCurrentWeather: (state, action) => {
			console.log(action.payload)
			return {
				...state,
				currentWeather: action.payload,
			}
		}


	}
})

export const {setTripData, setWeatherOnTrip, setCurrentWeather} = currentWeatherSlice.actions
export default currentWeatherSlice.reducer;
