import { TfiCheck, TfiTarget } from "react-icons/tfi";

/* eslint-disable react/prop-types */
const StepperCard = ({ status, isLast, isCompleted }) => {
    return isCompleted
        ?
        <li className='max-sm:ml-10'>
            <div className='w-[300px] flex gap-5 items-center'>
                <div className='w-10 h-10 border border-black bg-gray-200 flex justify-center items-center rounded-full'>
                    <TfiCheck color='rgb(34 197 94)' size={20} />
                </div>
                <h3 className="font-medium text-green-500">{status}</h3>
            </div>
            {!isLast && <div className='ml-5 w-[2px] h-16 bg-green-500'></div>}
        </li> : <li className='max-sm:ml-10'>
            <div className='w-[300px] flex gap-5 items-center'>
                <div className='w-10 h-10 border border-black bg-gray-200 flex justify-center items-center rounded-full'>
                    <TfiTarget color='black' size={20} />
                </div>
                <h3 className="font-medium text-gray-500">{status}</h3>
            </div>
            {!isLast && <div className='ml-5 w-[2px] h-16 bg-black'></div>}
        </li>
}


export default StepperCard;