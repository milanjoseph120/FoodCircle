import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {id} = useParams()
  console.log(id);
   const allrestaurants = useSelector((state)=>state.restaurantSlice.allrestaurant.find(item=>item.id==id))
   console.log(allrestaurants);
  return (
   <div>
    <Row className='my-5' >
      <Col md={1}>
      
      </Col>
      <Col md={3}>
        <img width={'100%'} height={'75%'} className='mt-5 rounded' src={allrestaurants.photograph}  alt="" />
      </Col>
      <Col md={7} className='px-5'>
        <hr />
        <h1 className='text-center'><span className='text-warning'>Restaurant</span> Details</h1>
        <hr /> 
      <ListGroup>
    <ListGroup.Item className='text-center p-5'>Restaurant Name: <span className='text-danger'>{allrestaurants.name}</span></ListGroup.Item>
    <ListGroup.Item>Neighborhood:<span className='text-danger'> {allrestaurants.neighborhood}</span></ListGroup.Item>
    <ListGroup.Item>Cusine_type: <span  className='text-danger'>{allrestaurants.cuisine_type}</span></ListGroup.Item>
    <ListGroup.Item>Address: <span  className='text-danger'>{allrestaurants.address}</span></ListGroup.Item>
    <ListGroup.Item className='text-center'>
      <button className='btn btn-warning rounded' onClick={handleShow}>Operational Hours</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:  {allrestaurants.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:  {allrestaurants.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:  {allrestaurants.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:  {allrestaurants.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:  {allrestaurants.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturady:  {allrestaurants.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:  {allrestaurants.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        
      </Modal>
    
      <RestReview reviews={allrestaurants.reviews}/>
     
    </ListGroup.Item>
    
  </ListGroup>
      </Col>
      <Col md={1}>
      </Col>
    </Row>
   
   </div>
  )
}

export default RestView