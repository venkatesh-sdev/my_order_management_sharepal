/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createPortal } from 'react-dom';
export default function Modal({ isOpen, children }) {
    if (!isOpen) return null;
    return createPortal(
        <div className='fixed inset-0 bg-[#000000b9] flex justify-center items-center'>
            {children}
        </div>
        , document.getElementById('modal') // this will let react-dom know that we want to render this modal outside the current React tree
    )
}