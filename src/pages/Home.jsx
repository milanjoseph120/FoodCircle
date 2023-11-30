import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantSlice'

function Home() {
  const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(fetchrestaurant())
  },[])
  return (
    <div>
      <Row>
       {allrestaurant?.length>0?
       allrestaurant.map((restaurants)=>( <Col className='px-5 py-3' sm={6} md={4}>
       <RestCard restaurants={restaurants}/>
       </Col>))
       :
        <p className='text-danger fs-4'>Nothing to display</p>
        }
       
      </Row>
    </div>
  )
}

export default Home