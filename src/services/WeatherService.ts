import axios from "axios";

export class WeatherService {
	private static weatherApi = axios.create({
		baseURL: import.meta.env.VITE_WEATHER_SERVER_URL
	})
	private static additionalQueryParams = `unitGroup=metric&include=days&key=${import.meta.env.VITE_WEATHER_API_KEY}&contentType=json`

	static async getCurrentWeatherOnTrip({city, startTrip, endTrip}) {
		const response = await this.weatherApi.get(`/${city}/${startTrip}/${endTrip}?${additionalQueryParams}`);
		return response.data.days;
	}

	static async getCurrentWeatherOnDay(city: string) {
		const response = await this.weatherApi.get(`/${city}/today?${additionalQueryParams}`)
		return response.data.days;
	}
}
