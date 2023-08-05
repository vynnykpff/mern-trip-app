import {AxiosResponse} from "axios";
import $api from "@/http";
import {ResponseTrip, Trip} from "@/types/Trip";
import {CityService} from "@/services/CityService.ts";
import {CreateTrip} from "@/types/CreateTrip.ts";
import {DeleteTrip} from "@/types/DeleteTrip.ts";

export class TripsService {
	private static async addImage(curr: ResponseTrip): Promise<Trip> {
		const image = await CityService.getCityImage(curr.cityName);
		return {...curr, image};
	};

	static async getAllTrips(): Promise<AxiosResponse<Trip[]>> {
		const res = await $api.get("/trips");
		const promiseResults = await Promise.all(res.data.map(this.addImage));
		res.data = promiseResults;

		return res;
	}

	static async createTrip(data: CreateTrip): Promise<AxiosResponse<Trip>> {
		const res = await $api.post("/trips", data);
		res.data = this.addImage(res.data);

		return res;
	}

	static async updateTrip(data: Trip): Promise<AxiosResponse<Trip>> {
		const res = await $api.patch("/trips", data);
		res.data = this.addImage(res.data);

		return res;
	}

	static async deleteTrip(data: DeleteTrip): Promise<AxiosResponse<Trip>> {
		const res = await $api.post<Trip>("/trips/delete", data);

		return res;
	}
}
