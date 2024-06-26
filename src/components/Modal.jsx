/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createPortal } from 'react-dom';


import { Toaster } from 'react-hot-toast';

export default function Modal({ isOpen, children }) {
    if (!isOpen) return null;
    return createPortal(
        <div className='fixed inset-0 bg-[#000000b9] flex justify-center items-center'>
            {children}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
        , document.getElementById('modal')
    )
}