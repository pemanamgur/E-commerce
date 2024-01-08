import React from 'react'
import './Offers.css'
import  exclusive_img from '../Component/Assets/exclusive_img.avif'
const Offers = () => {
    return(
        <div className='offers'>
          <div className='offers-left'>
            <h1>Exclusive </h1>
              <h1>Offers For You</h1>
              <p>Only on best sellers products</p>
              <button>Check now</button>
          </div>
            <div className='offers-right'>
              <img src={exclusive_img} alt='img'/>
            </div>
        </div>
    )
}

export default  Offers;