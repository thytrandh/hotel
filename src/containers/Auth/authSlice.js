import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "api/api";
import { clearAuthHeader, setAuthHeader } from "api/setHeader";

const initialState = {
    currentUser: null,
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
    try {
        const { email, password } = data;
        console.log(data);
        //call API
        const result = await api.post(
            "/api/v1/auth/login",
            {
                email,
                password
            }
        );
        //set default header authentication - for axios
        setAuthHeader(result.data.token);
        return result.data;
    } catch (error) {
        const errMessage = error.response.data.message;
        message.error(errMessage);
        console.log(error); //Lay loi tu BE tra ve
        return thunkAPI.rejectWithValue(errMessage);
    }
});

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
    try {
        const { username, email, password, role } = data;
        console.log(data);
        //call API
        const result = await api.post(
            "/api/v1/auth/register",
            {
                username,
                email,
                password,
                role,
            }
        );
        console.log(result.data);
        return result.data; //payload
    } catch (error) {
        const errMessage = error.response.data.message;
        message.error(errMessage);
        console.log(error); //Lay loi tu BE tra ve
        return thunkAPI.rejectWithValue(errMessage);
    }
});



const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        logout: (state, action) => {
            state.currentUser = null;
            clearAuthHeader();
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => { 
            state.currentUser = action.payload; 
        },
        [register.fulfilled]: (state, action) => { 
            state.currentUser = action.payload; 
        },
    }                                 
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;