import {DEFAULT_ERROR_MESSAGE} from "@/helpers/checkError.ts";

export const getErrorObject = (e: any) => {
	if (!e.response?.data.message) {
		return {
			message: DEFAULT_ERROR_MESSAGE
		}
	}
	if (Array.isArray(e.response!.data.message)) {
		return {
			...e.response!.data,
			message: e.response!.data.message[0],
		};
	} else {
		return {
			...e.response!.data,
			message: e.response!.data.message,
		};
	}
};
