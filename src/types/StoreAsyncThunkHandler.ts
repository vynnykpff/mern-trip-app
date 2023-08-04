import {AnyAction, Draft} from "@reduxjs/toolkit";

export type StoreAsyncThunkHandler<T, R=void> = (state: Draft<T>, action: AnyAction) => R;
