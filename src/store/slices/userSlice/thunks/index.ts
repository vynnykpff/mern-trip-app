import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {UserState} from "@/store/slices/userSlice";
import {refresh} from "@/store/slices/userSlice/thunks/auth/refresh.ts";
import {register} from "@/store/slices/userSlice/thunks/auth/register.ts";
import {logout} from "@/store/slices/userSlice/thunks/auth/logout.ts";
import {getUserData} from "@/store/slices/userSlice/thunks/user/getUserData.ts";
import {patchUser} from "@/store/slices/userSlice/thunks/user/patchUser.ts";
import {deleteUser} from "@/store/slices/userSlice/thunks/user/deleteUser.ts";
import {login} from "@/store/slices/userSlice/thunks/auth/login.ts";


const thunks: StoreAsyncThunk<UserState>[] = [login, refresh, register, logout, getUserData, patchUser, deleteUser];

export default thunks;
