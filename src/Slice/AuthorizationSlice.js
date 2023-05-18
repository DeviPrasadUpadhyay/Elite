import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        currentTime: "00:00:00"
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        timeset(state, action) {
            console.log("state, action", action.payload);
            // debugger;
            state.currentTime = action.payload;
        }
    }
});

export const { login, logout, timeset } = authSlice.actions;
export default authSlice.reducer;
