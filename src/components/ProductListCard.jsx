/* eslint-disable react/prop-types */

const ProductListCard = ({ product }) => {
    return <div className='bg-white cursor-pointer rounded-lg p-2 flex items-start gap-0 sm:gap-5 shadow flex-wrap sm:flex-nowrap'>
        <div className='image-hover overflow-hidden rounded-lg mx-auto sm:mx-0'>
            <img
                className='bg-gray-200 transition-all duration-200 object-contain w-40'
                src={product.image}
            />
        </div>
        <div className='py-3 flex gap-2 sm:gap-5 flex-col justify-between'>
            <h1 className='line-clamp-3 text-ellipsis overflow-hidden min-w-[180px]'>
                {product.name}
            </h1>
            <div className='flex gap-5 items-center'>
                <p className='text-gray-400 text-sm'>
                    Qty: {product.quantity}
                </p>
                <p className='text-sm font-semibold'>
                    Rs: {product.rentalPrice}
                </p>
            </div>
            <p className='text-sm text-gray-500 line-clamp-3 text-ellipsis overflow-hidden max-[420px]:hidden'>
                {product.description}
            </p>
        </div>
    </div>
}

export default ProductListCard;