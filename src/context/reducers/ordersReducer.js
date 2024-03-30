/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"
import { orders } from "../../constant/data";


const initialState = {
    orders: orders,
}

const ordersSlice = createSlice(
    {
        name: 'orders',
        initialState,
        reducers: {
            cancelOrder: (state, action) => {

                state.orders = state.orders.map(order => {
                    if (order.orderId === action.payload) {
                        return { ...order, orderStatus: 10 }
                    }
                    return order;
                });
            },
        }
    }
);

export const {
    editOrder,
    cancelOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;