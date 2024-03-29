import { createSlice } from "@reduxjs/toolkit";

const initialSlice={
    email: null,
    password: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialSlice,
    reducers:{
        setUser(state, action){
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.id=action.payload.id;
        },
        removeUser(state){
            state.email=null;
            state.password=null;
            state.id=null;
        },
    },
})
export const {setUser, removeUser}=userSlice.actions;
export default userSlice.reducer;