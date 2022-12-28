import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slice/global.slice";

const reducer = combineReducers({
    global: globalReducer,
});

const appReducer = (state: any, action: AnyAction) => {
    return reducer(state, action);
}
const store = configureStore({
    reducer: appReducer,
});

export default store;