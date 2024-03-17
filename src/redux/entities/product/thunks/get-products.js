import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectProductIds } from "..";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const response = await fetch(`http://localhost:3001/api/products/`);
        return await response.json();
    },
    { condition: (_, {getState}) => !selectProductIds(getState())?.length }
)