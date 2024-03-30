/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { TfiArrowRight, TfiClose, TfiTarget } from "react-icons/tfi";
import Modal from './Modal';

import { useDispatch } from 'react-redux';
import { cancelOrder } from '../context/reducers/ordersReducer';

import { orderStatusList } from '../constant/data';

import ProductListCard from './ProductListCard';
import StatusTracking from './StatusTracking';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDate = ({ title, date }) => {
    return <div className='flex gap-2 flex-col md:ml-5'>
        <p className='text-xs md:text-sm text-gray-400  flex-wrap'>{title}</p>
        <p className='text-md md:text-2xl font-semibold text-black'>{date}</p>
    </div>
}

const OrderCard = ({ order }) => {
    const dispatch = useDispatch();
    const [showTracking, setShowTracking] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);

    const cancelOrderFn = () => {
        dispatch(cancelOrder(order.orderId));
    }

    const showReportModalFn = () => {
        setShowReportModal(prev => !prev);
    }
    const showTrackingModalFn = () => {
        setShowTracking(prev => !prev);
    }

    const submitReportFn = () => {
        setShowReportModal(prev => !prev);
        toast('Report Submitted', { type: "success", autoClose: true, })
    }

    return (
        <div className='bg-white w-full overflow-hidden border-2 border-gray-400 rounded-md shadow-lg '>
            {/* Order Id and Track Order */}
            <ToastContainer />
            <div className='px-4 py-2 sm:p-7 flex justify-between flex-wrap gap-2'>
                <div className='flex gap-2 sm:gap-5 items-center flex-wrap'>
                    <div className='font-medium text-md flex gap-2 sm:gap-5 bg-[#eaeaea] rounded-full px-4 py-2 '>
                        <h3 className=''>
                            Order
                        </h3>
                        <span className='text-blue-500 '>
                            # {order.orderId}
                        </span>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>
                            Order Placed: {order.orderPlacedDate.toDateString()}
                        </p>
                    </div>
                </div>
                {
                    order.orderStatus !== 10 && <button
                        onClick={showTrackingModalFn}
                        className='flex gap-2 items-center px-7 py-4 text-sm uppercase tracking-[1px] bg-[#091747] hover:opacity-90 text-white rounded-full shadow-sm'
                    >
                        <TfiTarget color='white' />
                        track order
                    </button>}
                {/* Status Tracking */}
                <Modal isOpen={showTracking} >
                    <StatusTracking order={order} showTrackingModal={showTrackingModalFn} />
                </Modal>
            </div>
            {/* Products List and Order Details */}
            <div className='flex border-t border-t-gray-200 py-5 mx-3 sm:mx-6 md:h-[430px] flex-wrap '>
                {/* Product List */}
                <div className='md:w-1/2 shadow-md bg-gray-200 rounded-lg p-2 overflow-y-scroll flex flex-col gap-2 max-md:h-[330px]'>
                    {
                        order.products.map(
                            (product, index) => <ProductListCard
                                key={`${index}${product.name}`}
                                product={product}
                            />
                        )
                    }
                </div>
                {/* Order Details */}
                <div className='md:w-1/2 flex sm:flex-col items-center gap-5 justify-evenly overflow-y-scroll flex-wrap'>
                    <div className='flex justify-around flex-wrap w-full px-5 py-2 gap-2 '>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-xs md:text-sm text-gray-400'>
                                Status
                            </p>
                            <p className={`text-md md:text-xl font-semibold ${order.orderStatus === 10 ?
                                "text-red-500" : "text-blue-500"}`}>
                                {orderStatusList[order.orderStatus]}
                            </p>
                        </div>
                        <ProductDate
                            title={'Delivery Expected by'}
                            date={order.deliveryExpectedDate.toDateString()}
                        />
                    </div>
                    <div className='flex justify-around gap-2 flex-wrap w-full px-5 py-2  '>
                        <ProductDate
                            title={'Rent Starts At'}
                            date={order.rentalStartDate.toDateString()}
                        />
                        <ProductDate
                            title={'Rent Ends At'}
                            date={order.rentalEndDate.toDateString()}
                        />
                    </div>
                </div>
            </div>
            {/* Cancel Order and Total Price */}
            <div className='sm:h-[70px] h-[50px] border-t border-t-gray-300 flex justify-between'>
                {
                    order.orderStatus !== 10 && <button
                        onClick={cancelOrderFn}
                        className='hover:bg-[#091747] hover:text-white transition-all duration-200 border-r text-md flex gap-2  justify-center items-center border-r-gray-300 h-full tracking-[1px] uppercase sm:w-[250px] px-5 text-hover'
                    >
                        <TfiClose
                            className='transition-all duration-200'
                            color='black'
                            size={12}
                        /> Cancel
                    </button>
                }
                <div className='flex justify-between items-center w-full sm:px-8 px-2'>
                    <p className='text-sm text-gray-400 hidden md:block'>
                        Paid using credit card ending with 7334
                    </p>
                    <div className='flex gap-2 sm:gap-5 items-center'>
                        <button
                            onClick={showReportModalFn}
                            className='px-5 py-2 bg-gray-300 text-sm text-red-500 rounded-md'
                        >
                            Report!
                        </button>
                        <p className='text-md sm:text-xl font-semibold'>
                            Rs. {order.totalAmount}
                        </p>
                    </div>
                    {/* Report Issues Modal */}
                    <Modal isOpen={showReportModal}>
                        <div className='bg-white flex flex-col gap-5 items-start max-w-[90%] max-h-[90%] my-10 p-2 sm:p-5'>
                            <div className='flex justify-between items-center w-full'>
                                <h1 className=' text-lg sm:text-2xl font-medium uppercase tracking-widest'>Report Issues!</h1>
                                <TfiClose
                                    className='transition-all duration-200 hover:scale-110 cursor-pointer'
                                    color='black'
                                    size={20}
                                    onClick={showReportModalFn}
                                />
                            </div>
                            <textarea className='bg-gray-200 p-5 w-full sm:w-[80%] h-[30%] sm:h-[50%] border border-gray-500 rounded-lg'></textarea>
                            <button
                                onClick={showReportModalFn}
                                className='bg-[#091747] text-white transition-all duration-200 border-r text-md flex gap-2 rounded-md  justify-center items-center border-r-gray-300  tracking-[1px] uppercase py-2 px-5 text-hover '
                            >
                                <TfiArrowRight
                                    className='transition-all duration-200'
                                    color='white'
                                    size={12}
                                    onClick={submitReportFn}
                                /> Submit
                            </button>
                            <p className='text-sm text-gray-400'>
                                ! Report your issues here we will solve the problem that based on your order!
                                Flase reports cannot considered as a problem.
                            </p>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default OrderCard




