import {createSlice} from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const history = createSlice({
    name: 'history',
    initialState: {
        history: []
    },
    reducers: {
        getUserHistoryState: (state, action) => {
            state.history = action.payload;
        },
        // addHistoryState: (state, action) => {
        //     state.history.push(action.payload);
        // }
    }
})

export const getUserHistory = () => apiCall({
    url: 'history',
    method: 'get',
    onSuccess: 'history/getUserHistoryState',
    onFail: 'cash/error'
});

// export const addHistory = (data) => apiCall({
//     url: 'history',
//     method: 'post',
//     onSuccess: 'history/addHistoryState',
//     onFail: 'cash/error',
//     data
// })

export default history.reducer;