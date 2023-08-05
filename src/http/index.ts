import axios from "axios";
import {AuthResponse} from "@/types/AuthResponse.ts";
import {store} from "@/store/store.ts";
import {checkError} from "@/helpers";
import {getErrorObject} from "@/helpers/getErrorObject.ts";
import {userSlice} from "@/store/slices/userSlice/slice";
import {logout} from "@/store/slices/userSlice/thunks/auth/logout.ts";

export const serverURL = import.meta.env.VITE_SERVER_URL;
const baseURL = serverURL + "/api";

axios.interceptors.response.use((config) => config, async (err) => {
    throw checkError(getErrorObject(err).message);
});

const $api = axios.create({
    baseURL,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    if (localStorage.getItem("accessToken")) {
        config.headers!.Authorization = `Bearer ${localStorage.getItem(
            "accessToken",
        )}`;
    }
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry &&
            localStorage.getItem("accessToken")
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post<AuthResponse>(
                    `${baseURL}/auth/refresh`,
                    {},
                    {withCredentials: true},
                );
                store.dispatch(userSlice.actions.updateUser({authorized: true}));
                localStorage.setItem("accessToken", response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                store.dispatch(logout.asyncThunk(null));
            }
        }
        throw checkError(getErrorObject(error).message);
    },
);


export default $api;
