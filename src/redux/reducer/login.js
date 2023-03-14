import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from '../api-call';


const login = createSlice({
    name: 'login',
    initialState: {
        login: {}
    },
    reducers: {
        updateLoginState: (state, action) => {
            state.login = action.payload;
        },
        errorLogin: (state, action) => {
            alert("Internal server error");
        }
    }
});

export const checkLogin = () => apiCall(
    {
        url: '/login',
        method: 'get',
        onSuccess: 'login/updateLoginState',
        onFail: 'login/errorLogin'
    }
);

export default login.reducer;