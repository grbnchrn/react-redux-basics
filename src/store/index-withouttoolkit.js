import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
const initialCounterState = {
    counter: 0,
    showCounter: true,
};
//Redux state won't merge, has to create state completely each time
const counterReducer = (state = initialCounterState, action) => {
    if (action.type === "Increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === "Decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === "IncrementByValue") {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        };
    }
    if (action.type === "toggleCounter") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }
    return state;
};
const store = createStore(counterReducer);

export default store;
