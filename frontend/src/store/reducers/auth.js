import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    token:null,
    currentUser: null,
    isLoading:false
}

export const register = createAsyncThunk("auth/register", async(userData , thunkAPI)=>{
    try {
        let url = "http://localhost:3000/agentRegistration"
        const response = await axios.post(url, {user: userData});
        console.log(response);
        return response.data.uniqueId
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.user);
    }
})


const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(register.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state,action)=>{
                state.isLoading = false
                state.currentUser = action.payload
                state.token = action.payload?.data?.uniqueId
                console.log('action',state.token);           
            })
            .addCase(register.rejected, (state)=>{
                state.isLoading = false
            })
    }
});

export default authSlice.reducer;