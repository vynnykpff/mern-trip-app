import $api, {serverURL} from "@/http";
import {AuthResponse} from "@/types/AuthResponse.ts";
import axios, {AxiosResponse} from "axios";
import {AuthData} from "@/types/AuthData.ts";

export class AuthService {
    static async login(loginData: AuthData): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/auth/login", loginData);
    }

    static async register(registerData: AuthData): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/auth/register", registerData);
    }

    static async refresh(): Promise<AxiosResponse<{ accessToken: string }>> {
        return $api.post<{ accessToken: string }>("/auth/refresh");
    }

    static async logout(): Promise<AxiosResponse> {
        return axios.post(
            "/auth/logout",
            {},
            {withCredentials: true, baseURL: serverURL + "/api"},
        );
    }
}