import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name: "product",
    initialState: {
        accessToken: null,
        product: null,
    },
    reducers: {
        setProducts: (state, action) => {
            return {state, 
                 ...action.payload 
            };
        },
        removeProduct: () => {
            return {
                accessToken: null,
                product: null,
            };
        }
    },
});

export default productReducer.reducer;
export const { setProducts, removeProduct } = productReducer.actions;
