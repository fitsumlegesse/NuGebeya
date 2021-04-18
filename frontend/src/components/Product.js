import React from 'react'
import { Card } from 'react-bootstrap'

const divStyle = {
    color: 'black',
  };
  
const Product = ({ product }) => {
    
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} varient='top'/>
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong style={divStyle}>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='div' style={divStyle}>
                    <div > 
                        {product.rating} from {product.numReviews} reviews 
                    </div>
                </Card.Text>
                <Card.Text as='h3' style={divStyle}> ${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
