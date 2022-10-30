import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json"

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            console.log(action.payload);
            state = {...action.payload};
            console.log(state);
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;