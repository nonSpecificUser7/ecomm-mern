import {
    CART_ADD_PRODUCT,
    CART_REMOVE_PRODUCT,
} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        case CART_ADD_PRODUCT:
            const item = action.payload
            const isExistItem = state.cartItems.find(v => v.product === item.product)

            if (isExistItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(v => v.product === isExistItem
                        .product ? item : v)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        default:
            return state
    }
}
