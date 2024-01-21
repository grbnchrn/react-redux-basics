import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";



const store = configureStore({
    reducer: {counterRdr: counterReducer, authRdr: authReducer}
}

/* Single reducer sample
    const store = configureStore({
    reducer: counterSlice.reducer
} */
);

export default store;
