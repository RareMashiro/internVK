import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks/get-products";
// import { products } from "../../../../materials/mock";

const entityAdapter = createEntityAdapter();

export const ProductSlice = createSlice({
    name: "product",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectProductIds: (state) => state.ids,
        selectProductById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => builder
        .addCase(getProducts.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        })
})

export const { selectProductIds, selectProductById } = ProductSlice.selectors;


// export const ProductSlice = createSlice({
//     name: "product",
//     initialState: {
//         entities: products.reduce((acc, product) => {
//             acc[product.id] = product;
//             return acc;
//         }, {}),
//         ids: products.map(({id}) => id),
//     },
//     selectors: {
//         selectProductIds: (state) => state.ids,
//         selectProductById: (state, id) => state.entities[id],
//     },
// })

// export const { selectProductIds, selectProductById } = ProductSlice.selectors;