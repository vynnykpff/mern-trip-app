export const setCheckError = (response, message: string) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};
