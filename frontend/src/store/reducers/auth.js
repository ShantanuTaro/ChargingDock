import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: undefined,
    isLoading:false
}



const authSlice = createSlice({
    name:'auth',
    initialState,
});

export default authSlice.reducer;