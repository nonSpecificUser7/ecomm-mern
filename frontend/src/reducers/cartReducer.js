import {
    CART_ADD_PRODUCT,
    CART_REMOVE_PRODUCT,
    CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
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

        case CART_REMOVE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter(v => v.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            }
        default:
            return state
    }
}
