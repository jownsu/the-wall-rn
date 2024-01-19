import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "../redux/auth_slice";
import wall_reducer from "../redux/wall_slice";

export const store = configureStore({
    reducer: {
        auth: auth_reducer,
        wall: wall_reducer
    }
});