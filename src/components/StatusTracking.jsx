/* eslint-disable react/prop-types */
import StepperCard from './StepperCard'
import { orderStatusList } from '../constant/data'
import { TfiClose, TfiTarget } from 'react-icons/tfi'

const StatusTracking = ({ order, showTrackingModal }) => {
    return (
        <div className='w-full h-full p-5 sm:p-10'>
            <ol className=" w-full h-full flex flex-col py-10  bg-white items-center text-gray-500 overflow-y-scroll relative">
                <h1 className='text-xl font-medium uppercase tracking-widest my-5 mr-5'>
                    Track Product Status
                </h1>
                {
                    orderStatusList.map(
                        (status, index) => index === 10 ? null :
                            <StepperCard
                                key={index}
                                status={status}
                                isLast={index === (orderStatusList.length - 2)}
                                isCompleted={order.orderStatus >= index}
                            />
                    )
                }
                <button
                    onClick={showTrackingModal}
                    className='flex gap-2 mt-5 mr-20 items-center px-7 py-4 text-sm uppercase tracking-[1px] bg-[#091747] hover:opacity-90 text-white rounded-full shadow-sm'
                >
                    <TfiTarget color='white' />
                    Keep Tracking
                </button>
                <button
                    onClick={() => showTrackingModal(prev => !prev)}
                    className='fixed sm:top-[10%] top-[5%] right-[10%]'
                >
                    <TfiClose color='black' size={25} />
                </button>
            </ol>
        </div>
    )
}

export default StatusTracking