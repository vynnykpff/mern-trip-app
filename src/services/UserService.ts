import {AxiosResponse} from "axios";
import $api from "@/http";
import {User} from "@/types/User.ts";
import {PatchUser} from "@/types/PatchUser.ts";

export class UserService {
    static async getUserData(): Promise<AxiosResponse<User>> {
        return $api.get<User>("/users/@me");
    }

    static async patchUser(patchData: PatchUser): Promise<AxiosResponse<User>> {
        return $api.patch<User>("/users/@me", patchData);
    }

    static async deleteUser(): Promise<AxiosResponse<User>> {
        return $api.delete<User>("/users/@me");
    }
}
