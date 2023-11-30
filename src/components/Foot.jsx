import React from 'react'
import { Link } from 'react-router-dom'
import restaurant from '../images/restaurantanimationdribbble.gif'

function Foot() {
  return (
    <div style={{width:"100%", height:"300px" ,backgroundColor:"white"}} className='d-flex justify-content-center align-items-center flex-column'>
             <div className='footer d-flex justify-content-evenly align-items-center w-100 mt-5'>
                <div className='website text-black' style={{width:"300px"}}>
                    <h4 className='text-warning'>
                    <i class="fa-solid fa-utensils me-2"></i>{' '}
                      Food Circle   
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis ne, ipsum sunt harum voluptatem velit corporis, quia quidem aut ut debitis fugit?</p>

                </div>
                <div className='links d-flex flex-column '>
                  <h3 className='text-black'>Links</h3>
                  <Link to={'/'}  style={{textDecoration:"none" , color:"black"}}>Home Page</Link>
                  <Link to={'/Restaurant_view'} style={{textDecoration:"none" , color:"black"}}>RestView</Link>
                  {/* <Link   style={{textDecoration:"none" , color:"black"}}></Link>
                  <Link   style={{textDecoration:"none" , color:"black"}}></Link> */}
                </div>
                <div className='guides d-flex flex-column '>
                <h3 className='text-black'>Guides</h3>
                  <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}>React</Link>
                  <Link to={'https://react-bootstrap.netlify.app/'}  style={{textDecoration:"none" , color:"black"}}>React bootstrap</Link>
                  <Link to={'https://bootswatch.com/'}  style={{textDecoration:"none" , color:"black"}}>BootsWatch</Link>
                </div>
                <div className='contact'>
                  <h4 className='mb-3 '>Contact US</h4>
                  <div className=''>
                    <img width={'100%'} height={'100vh'} src={restaurant} alt="" />
                  </div>
                  <div className='icons d-flex justify-content-evenly'>
                       <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-instagram"></i></Link>

                       <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-twitter"></i></Link>

                       <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-facebook"></i></Link>

                       <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"black"}}><i class="fa-brands fa-linkedin"></i></Link>
                  </div>
                </div>
             </div>
             <p className='text-black'><center>Copyright @ 2023 Project Restaurant.Built with React Thunk</center></p>
    </div>
  )
}

export default Foot