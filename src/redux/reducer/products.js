import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { apiCall } from "../api-call";

const product = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        getProductState: (state, action) => {
            state.product = action.payload;
        },
        deleteProduct: (state, action) => {
          let index = state.product.findIndex((item)=> item.id === action.id)
          state.product.splice(index,1)
        },
        EditProduct: (state, action) => {
            state.product.map((item,index)=> {
                item.id = action.payload.id;
                item.name = action.payload.name;
                item.description = action.payload.description;
                item.amount = action.payload.amount;
                item.price = action.payload.price;
                item.date = action.payload.date;
                item.img = action.payload.img;
            })
        }
    }
})

export const getProductState = () => apiCall({
    url: 'product',
    method: 'get',
    onSuccess: 'product/getProductState',
    onFail: 'cash/error'
});
export const deleteProduct = (id) => apiCall({
    url: `product/${id}`,
    method: 'delete',
    onSuccess: 'product/deleteProduct',
    onFail: 'cash/error',
    id
});
export const editProduct = (data) => apiCall({
    url: `product/${data.id}`,
    method: 'put',
    onSuccess: 'product/EditProduct',
    onFail: 'cash/error',
    data
});
export default product.reducer;