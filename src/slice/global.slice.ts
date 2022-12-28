import { createSlice } from "@reduxjs/toolkit";

type GlobalState = {
    theme: string;
    language: string;
}

const initialState: GlobalState = {
    theme: "light",
    language: "en",
}
const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload;
        }
    }
})

export const { changeTheme } = globalSlice.actions;
export default globalSlice.reducer;