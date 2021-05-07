import React, { useEffect, } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import ButtonM from '@material-ui/core/Button'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id
    
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    //?qty=1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    // console.log(cartItems)

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [ dispatch, productId, qty])
    
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        // console.log("Checkout ")
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart </h1>
                {cartItems.length === 0 ? (
                    <Message >
                        Your cart is empty <Link to='/' style={{color: 'black'}}>Go Back </Link>
                    </Message>
                ):(
                    <ListGroup varient='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}  style={{color: 'black' }}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control 
                                        as='select' 
                                        value={item.qty} 
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                {[...Array(item.countInStock).keys()].map(x => (
                                    <option key={x + 1} value={x + 1}>
                                        {x+1}
                                    </option>
                                ))}    
                                </Form.Control> 
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' varient='light' onClick={()=> removeFromCartHandler(item.product)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup varient='flush'>
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc,item)=>acc + item.qty,0)})
                                items
                            </h2>
                            $
                            {cartItems
                            .reduce((acc, item) => acc + item.qty * item.price, 0)
                            .toFixed(2)
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <ButtonM 
                            className="Button"
                            size="large"
                            variant="contained"
                            disabled={cartItems.length === 0}
                            color="primary"
                            onClick={checkOutHandler}
                            style={{background:'#7699d4', marginBottom: '5px',  }}
                        >
                                 Proceed to checkout
                        </ButtonM>
                            
                        {/* <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkOutHandler}>Proceed to checkout</Button> */}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col md={2}>

            </Col>
        </Row>
    )
}

export default CartScreen
