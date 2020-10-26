import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productDetailsReducer, productListReducer,
    productDeleteReducer, productCreateReducer,
    productUpdateReducer,
} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import {
    userDetailsReducer, userLoginReducer, userRegisterReducer,
    userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer,
} from './reducers/userReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, } from './reducers/orderReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
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
