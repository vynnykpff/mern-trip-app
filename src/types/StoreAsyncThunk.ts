import {AsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";

export type StoreAsyncThunk<T> = {
    asyncThunk: AsyncThunk<any, any, any>;
    storeHandler: StoreAsyncThunkHandler<T>;
}
