import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productT } from '../product/product.types'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as productT[]
    },
    reducers: {
        addItem: (state, action: PayloadAction<productT>) => {
            state.cart.push(action.payload)
        },
        removeItem: (state, {payload}) => {
            state.cart = state.cart.filter(i => i.id !== payload)
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions