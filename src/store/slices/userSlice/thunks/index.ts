import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {login} from "@/store/slices/userSlice/thunks/login.ts";
import {UserState} from "@/store/slices/userSlice";
import {refresh} from "@/store/slices/userSlice/thunks/refresh.ts";
import {register} from "@/store/slices/userSlice/thunks/register.ts";
import {logout} from "@/store/slices/userSlice/thunks/logout.ts";

const thunks: StoreAsyncThunk<UserState>[] = [login, refresh, register, logout];

export default thunks;
