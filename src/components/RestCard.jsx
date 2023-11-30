import React from 'react'

import Card from 'react-bootstrap/Card';
import {  Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
  return (
    <div>
      <Link to={`/Restaurant_view/${restaurants.id}`} style={{textDecoration:"none"}}>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={restaurants.photograph} />
      <Card.Body>
        <Card.Title className='text-warning text-center p-2'>{restaurants.name}</Card.Title>
        <hr />
         <Row>
            <Col className='d-flex justify-content-between '>
            <Card.Text>
                <p style={{fontStyle:"20px"}}>{restaurants.neighborhood}</p>
            </Card.Text>
            </Col>
            <Col  className='d-flex justify-content-between '>
            <Card.Text>
                <p style={{fontStyle:"20px"}}>Cusine : {restaurants.cuisine_type}</p>
            </Card.Text>
            </Col>
         </Row>
       
       
      </Card.Body>
    </Card>
      </Link>
    </div>
  )
}

export default RestCard