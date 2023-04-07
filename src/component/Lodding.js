import React, { useEffect } from 'react'
import "../Style/Lodding.css"
import { preLoaderAnim } from '../Animation/Index'


function Loding() {
    useEffect(()=>{
        preLoaderAnim()
    })
  return (
    <div className='preloader' style={{backgroundColor: "black"}}>
      <div className="texts-container">
        <span>Shortlisted</span>
        <span>Singer</span>
        <span>Artist</span>
      </div>
      <p className='medium'>Good things come to those who wait...</p>
    </div>
  )
}

export default Loding