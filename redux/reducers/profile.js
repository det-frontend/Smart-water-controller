import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name:"gogo"
    },
    reducers: {
        SET_NAME(state, action) {
            state.name =  action.payload
        }
    }
})

export const { SET_NAME } = profileSlice.actions;
export default profileSlice;