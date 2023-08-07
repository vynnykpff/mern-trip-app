import axios from "axios";

export class CityService {
	private static cityApi = axios.create({
		baseURL: import.meta.env.VITE_CITY_SERVER_URL
	});

	static async getCityImage(cityName: string) {
		const geo = await this.getCity(cityName);
		const city = await this.getCityGeoName(geo);

		if (!city) {
			return "https://static.vecteezy.com/system/resources/thumbnails/009/007/126/small/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg";
		}

		const response = await this.cityApi.get(`/urban_areas/slug:${city}images`);
		return response.data.photos[0].image.mobile;
	}

	private static async getCity(city: string) {
		const response = await this.cityApi.get(`/cities/?search=${city}`);
		const res = response.data._embedded["city:search-results"][0]._links["city:item"]?.href;

		const data = res.split("/");
		return data[data.length - 2];
	}

	private static async getCityGeoName(geo: string) {
		const response = await this.cityApi.get(`/cities/${geo}`);
		const links = response.data._links;
		const res = links["city:urban_area"] ? links["city:urban_area"].href : false;

		if (typeof res !== "boolean" && res.length) {
			const data = res.split("slug:");
			return data[data.length - 1];
		}
		return res;
	}
}
