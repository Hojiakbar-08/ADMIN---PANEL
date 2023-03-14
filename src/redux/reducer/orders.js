import {createSlice} from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const orders = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        basket: []
    },
    reducers: {
        getUserOrdersState: (state, action) => {
            state.orders = action.payload;
        },
        updateBasket: (state, action) => {
            state.basket.push(action.payload)
        },
        deleteBasket: (state, action) => {
            console.log(action.payload)
            state.basket.map((item, index) => {
                if (item.id === action.payload) {
                    state.basket.splice(index, 1);
                }
            })
        }
        // addHistoryState: (state, action) => {
        //     state.orders.push(action.payload);
        // }
    }
})

export const getUserOrdersState = () => apiCall({
    url: 'product',
    method: 'get',
    onSuccess: 'orders/getUserOrdersState',
    onFail: 'cash/error'
});

// export const addHistory = (data) => apiCall({
//     url: 'orders',
//     method: 'post',
//     onSuccess: 'orders/addHistoryState',
//     onFail: 'cash/error',
//     data
// })

export const {updateBasket, deleteBasket} = orders.actions;
export default orders.reducer;