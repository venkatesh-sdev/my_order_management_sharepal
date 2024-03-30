/* eslint-disable no-unused-vars */
import React from 'react'

import { useSelector } from 'react-redux'

import OrderCard from './OrderCard'

const OrdersContainer = () => {
    const orders = useSelector(state => state.orders.orders)
    return (
        <div className='w-screen min-h-screen pb-5'>
            <div className='flex px-5 py-5 sm:px-14 sm:py-10 gap-5 items-center flex-wrap'>
                <h1 className='text-5xl font-light'>
                    My Orders
                </h1>
                <p className='text-sm text-gray-500 w-[300px] text-wrap'>
                    View and edit all your pending, deliverd and returned orders here
                </p>
            </div>
            <div className='sm:px-10 px-4 flex flex-col gap-5'>
                {
                    orders.map((order) => <OrderCard key={order.orderId} order={order} />)
                }
            </div>
        </div>
    )
}

export default OrdersContainer