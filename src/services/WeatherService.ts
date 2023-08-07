import axios from "axios";
import {ResponseTrip} from "@/types/Trip";

export class WeatherService {
	private static weatherApi = axios.create({
		baseURL: import.meta.env.VITE_WEATHER_SERVER_URL
	});
	private static additionalQueryParams = `unitGroup=metric&include=days&key=${import.meta.env.VITE_WEATHER_API_KEY}&contentType=json`;

	static async getWeatherOnTrip({cityName, startDate, endDate}: Omit<ResponseTrip, "id">) {
		const response = await this.weatherApi.get(`/${cityName}/${startDate}/${endDate}?${this.additionalQueryParams}`);
		return response.data.days;
	}

	static async getWeatherOnDay(city: string) {
		const response = await this.weatherApi.get(`/${city}/today?${this.additionalQueryParams}`);
		return response.data.days[0];
	}
}
