import axios from "axios";

export class CityService {
	private static cityApi = axios.create({
		baseURL: import.meta.env.VITE_CITY_SERVER_URL
	})

	static async getCurrentCity(city: string) {
		const response = await this.cityApi.get(`/cities/?search=${city}`);

		return response.data._embedded["city:search-results"][0]._links["city:item"]?.href
	}

	static async getCurrentCityGeoName(geo: string) {
		const response = await this.cityApi.get(`/cities/${geo}`);

		return response.data._links
	}

	static async getCurrentCityImage(city: string) {
		const response = await this.cityApi.get(`/urban_areas/slug:${city}images`)

		return response.data.photos[0].image.mobile
	}
}
