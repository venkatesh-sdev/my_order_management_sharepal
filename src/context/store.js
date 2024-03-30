import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./reducers/ordersReducer";

export default configureStore({
    reducer: {
        orders: ordersReducer,
    },
    middleware: (getEnhancedMiddleware) =>
        getEnhancedMiddleware({ serializableCheck: false })

})