import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {formType} from "../../models/models";

interface UserState {
    user: formType | any;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: '',
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state,action: PayloadAction<formType>){
            state.user = action.payload
        },
        logout: (state,action) => {
            state.user = action.payload
        }
    }
})

export const {logout} = userSlice.actions
export default userSlice.reducer