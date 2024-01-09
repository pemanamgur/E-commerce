import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero.png'
import hand_icon from '../Assets/hand_icon.png'
import right_arrow from '../Assets/right_arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <h2>New Arrivial Only</h2>
        <div>
            <div className='hero-hand-icon'>
               <p>new</p>
               <img src={hand_icon} alt="img1" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collections</div> 
            <img src={right_arrow} alt="img2" />
        </div>
      </div>
      <div className="hero-right">
          <img src={hero_image} alt="img3" />
      </div>
    </div>
  )
}

export default Hero
