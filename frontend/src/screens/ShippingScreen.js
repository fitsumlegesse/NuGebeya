import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')
    }
    return <FormContainer>
         <h1>Shipping</h1>
         <Form onSubmit = {submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label> Address </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter address'
                        value={address}
                        required 
                        onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label> City </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter city'
                        value={city}
                        required 
                        onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='postalcode'>
                    <Form.Label> Postal Code </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Postalcode'
                        value={postalCode}
                        required 
                        onChange={(e) => setPostalCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label> Country </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter country'
                        value={country}
                        required 
                        onChange={(e) => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' varient='primary'>
                    Continue
                </Button>
         </Form>
    </FormContainer>
}

export default ShippingScreen