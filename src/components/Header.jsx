import React from 'react'
import header from '../images/output-onlinegiftools.gif'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from '../images/chef-removebg-preview.png'
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className='d-flex p-3 mt-3 fs-4  '><span className='text-warning'>Food</span>Circle
      </Navbar.Brand>
      <Navbar.Brand href="#home" >
      <img src={header} width={'50%'} height={'50%'} className='d-inline-block align-top rounde' alt="" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <img className='d-inline-block align-top rounded ' width={'50%'} height={'50%'} src={image}  alt="" />
      </Navbar.Collapse>
      <div className='d-flex justify-content-center align-items-center '>
          <input onChange={(e)=>dispatch(search(e.target.value))} className='form-control border black ' type="text" placeholder='search'  /> 
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>
       
    </Container>
  </Navbar>
  )
}

export default Header