import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer'
import { orderCreateReducer, orderDetailsReducer } from './reducers/orderReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
})

const storageCartItems = localStorage.getItem('cartItems') ? JSON.parse
    (localStorage.getItem('cartItems')) : []

const storageUserInfo = localStorage.getItem('userInfo') ? JSON.parse
    (localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cart: {
        cartItems: storageCartItems,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: storageUserInfo }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store
