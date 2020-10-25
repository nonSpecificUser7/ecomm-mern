import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {

    const productId = match.params.id

    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
