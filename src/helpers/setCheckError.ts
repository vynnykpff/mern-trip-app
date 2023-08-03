import {AxiosResponse} from "axios";

export const setCheckError = (response: AxiosResponse, message: string) => {
	if (response.status !== 200) {
		throw new Error(message);
	}
};
