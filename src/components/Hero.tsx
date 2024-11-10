import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner.png)] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 80px top 100px "}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[120px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="flip-right">I'm</p>
            <p data-aos="flip-right">Maira</p>
            <p data-aos="flip-right">Hassan</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero