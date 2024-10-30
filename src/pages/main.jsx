import mainImg from '../assets/webFones1.png'
import { Link } from 'react-router-dom';
import React from 'react'

function Main() {
  return (
    <div>
       <div className='bg-[#01014B] w-full h-screen grid place-items-center'>
           <Link to="/Home">
           <img src={mainImg} className='m-auto w-96 cursor-pointer' alt="Main" />
           </Link>
       </div>
    </div>
  )
}

export default Main
