import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./entities/product";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request/index"

export const store = configureStore({
    reducer: combineSlices(
        ProductSlice,
        cartSlice,
        requestSlice,
    ),
});

console.log(store.getState());