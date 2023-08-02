import {weatherApi} from "./index.tsx";

const additionalQueryParams = `unitGroup=metric&include=days&key=${import.meta.env.VITE_WEATHER_API_KEY}&contentType=json`

export class WeatherService {
	static getCurrentWeatherOnTrip({city, startTrip, endTrip}) {
		return weatherApi.get(`/${city}/${startTrip}/${endTrip}?${additionalQueryParams}`).then(res => res.data.days);
	}

	static getCurrentWeatherOnDay(city: string) {
		return weatherApi.get(`/${city}/today?${additionalQueryParams}`).then(res => res.data.days);
	}
}
