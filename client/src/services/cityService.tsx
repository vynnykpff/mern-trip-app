import {cityApi} from "./index.tsx";

export class CityService {
	static getCurrentCity(city: string) {
		return cityApi.get(`/cities/?search=${city}`).then(res => res.data._embedded["city:search-results"][0]._links["city:item"]?.href
		);
	}

	static getCurrentCityGeoName(geo: string) {
		return cityApi.get(`/cities/${geo}`).then(res => res.data._links);
	}

	static getCurrentCityImage(city: string) {
		return cityApi.get(`/urban_areas/slug:${city}images`).then(res => res.data.photos[0].image.mobile);
	}
}
