export const DEFAULT_ERROR_MESSAGE = "Invalid data. Server error";

export const checkError = (message: string = DEFAULT_ERROR_MESSAGE) => {
    return new Error(message);
};
