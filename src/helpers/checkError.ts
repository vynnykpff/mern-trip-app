import {AxiosResponse} from "axios";

export const DEFAULT_ERROR_MESSAGE = "Invalid data. Server error";

export const checkError = (response: AxiosResponse, message: string = DEFAULT_ERROR_MESSAGE) => {
	if (response.status !== 200) {
		throw new Error(message);
	}
};
