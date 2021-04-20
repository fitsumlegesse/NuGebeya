import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const divStyle = {
    color: 'black',
  };

  const priceProp = {
    color: 'white',
    fontWeight: 'bold',
  };
  const cardTextProp = {
    color: 'white',
  };
  const cardBody = {
    backgroundColor: '#7699d4',
  };
  
const Product = ({ product }) => {
    
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} varient='top'/>
            </Link>

            <Card.Body style={cardBody}>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong style={cardTextProp}>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div' style={divStyle}>
                    <div style={cardTextProp}> 
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>
                </Card.Text>
                <Card.Text as='h3' style={priceProp}> ${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
