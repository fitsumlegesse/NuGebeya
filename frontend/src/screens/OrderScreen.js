import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ListGroupItem} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'


const OrderScreen = ({match}) => {
    const dispatch = useDispatch()
    const orderId = match.params.id

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading , error} = orderDetails
    console.log(order)


    if(!loading){
        const addDecimals = (num)=>{
           return (Math.round(num * 100/100)).toFixed(2)
       }

       order.itemsPrice = addDecimals(
           order.orderItems.reduce((acc,item)=> acc + item.price * item.qty, 0)
       )

       order.taxPrice = addDecimals(Number((0.15 * order.itemsPrice).toFixed(2)))

    }
    
    useEffect(()=> {
        if(!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
    },[dispatch, orderId])

    

    //Calculate Price 
    


    return loading ? <Loader /> : error ? <Message varient='danger'>
    </Message> : <>
        <h1>Order {order._id}</h1>
        <Row>
                    <Col md={8}>
                        <ListGroup varient='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <strong>Name:</strong>{order.user.name}
                                <a href={`mailto:${order.user.email}`}><p style={{color: "black"}}><strong>Email: </strong>{order.user.email}</p></a>
                                <p>
                                <strong>Address: </strong>
                                    {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                                    {order.shippingAddress.postalCode}, {' '}
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDelivered ?(
                                <Message severity='success'>Delivered on{order.deliveredAt}</Message>
                            ) : (<Message severity='error'>Not Delivered</Message>)
                            }
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup.Item>
                            <h2>Payment Methods</h2>
                            <p>
                            
                            <strong>Method: </strong>
                            {localStorage.getItem("paymentMethod")}
                            </p>
                            {order.isPaid ?(
                                <Message  severity="error">Not Paid</Message>
                                
                            ) : (<Message  severity="success">Paid on{order.paidAt}</Message>)
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {order.orderItems.length === 0? 
                            <Message>Order is empty</Message>: (
                                <ListGroup varient='flush'>
                                   {order.orderItems.map((item, index)=>(
                                       <ListGroup.Item key={index}>
                                           <Row>
                                               <Col md={1}>
                                                   <Image src={item.image} alt={item.name}
                                                    fluid rounded />
                                               </Col>
                                               <Col>
                                                    <Link to={`/product/${item.product}`}style={{color: "black"}}>
                                                        {item.name}
                                                    </Link>
                                               </Col>
                                               <Col md={4}>
                                                   {item.qty} X ${item.price} = ${item.qty * item.price}
                                               </Col>
                                           </Row>
                                       </ListGroup.Item>
                                   ))} 
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup varient='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>${order.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Shipping</Col>
                                        <Col>${order.shippingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tax</Col>
                                        <Col>${order.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>${order.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                        
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
    </>
    
}

export default OrderScreen
