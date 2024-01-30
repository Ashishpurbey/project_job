import React from 'react'
import products from '../products.js'
import {Row,Col} from 'react-bootstrap'
import Product from './Product.jsx'
const HomeScreen = () => {
    console.log(products);
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
            
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
