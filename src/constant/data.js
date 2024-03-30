/* eslint-disable no-unused-vars */
export const orderStatusList = [
    "Order Received",
    "KYC Received",
    "Order Confirmed",
    "Order Packed",
    "Order Delivered",
    "Pickup Due",
    "Pickup Scheduled",
    "Quality Checked",
    "Pickup Confirmed",
    "Pickup Taken",
    "Cancelled",
]

export const products = [
    {
        name: "TREK 100 Trekking Shoes - Women's",
        quantity: 1,
        rentalPrice: 1750,
        image: "https://ik.imagekit.io/faskf16pg/Trekking_Gear/GoPro_5_Inclusions_j7ynlAfeH.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654517480566",
        description: "This is the product for its very good reviews and importance its very useful in many cases."
    },
    {
        name: "50L Backpack",
        quantity: 1,
        rentalPrice: 1450,
        image: "https://ik.imagekit.io/faskf16pg/Trekking_Gear/GoPro_5_Inclusions__12__M0LggtW1y.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654702436018",
        description: "This is the product for its very good reviews and importance its very useful in many cases."
    },
]

const calculateTotalRentPrice = (products) => {
    let rentAmount = 0;
    products.map((product) => { rentAmount += product.rentalPrice })
    return rentAmount;
}


export const orders = [
    {
        userId: "user-id-738284782939",
        orderId: "BANTR1701441990199R",
        products: [
            products[0],
            products[1],
        ],
        orderPlacedDate: new Date(2024, 3, 11),
        deliveryExpectedDate: new Date(2024, 3, 13),
        rentalStartDate: new Date(2024, 3, 14),
        rentalEndDate: new Date(2024, 3, 19),
        numberOfItems: 1,
        rent: 1750,
        couponDiscount: 0,
        walletAmount: 0,
        refundableDeposit: 1250,
        shippingCharges: 0,
        totalAmount: 2340 + 1350,
        orderStatus: 5,
    },
    {
        userId: "user-id-73828423782939",
        orderId: "BANTR17014432990199R",
        products: [
            products[1],
            products[0],
        ],
        orderPlacedDate: new Date(2024, 3, 12),
        deliveryExpectedDate: new Date(2024, 3, 14),
        rentalStartDate: new Date(2024, 3, 15),
        rentalEndDate: new Date(2024, 3, 20),
        numberOfItems: 1,
        rent: 1450,
        couponDiscount: 0,
        walletAmount: 0,
        refundableDeposit: 1450,
        shippingCharges: 0,
        totalAmount: 2340 + 1350,
        orderStatus: 3,
    },

]