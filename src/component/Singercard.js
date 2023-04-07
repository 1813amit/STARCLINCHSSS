import React, { useState } from 'react'
import "../Style/Singercard.css"
import { useMotionValue, useTransform,motion } from 'framer-motion'


const Singercard = ({name,number,imageURL}) => {

  const [passShow, setPassShow] = useState(false);

    const toggle =()=>{
      setPassShow(!passShow)
    }

  
  return (
    <div className="SingerCard">
      <div className="image_div">
        <img className="main-image"
          src={imageURL}
          alt=""
        />
      </div>
      <div className="content_div">
        <div className="name_postdiv">
        <h1 className="large">{name.split(' ')[0] +" "+ name.split(' ')[1]} </h1>
          <p className="small">Singer</p>
        </div>
        <p className="medium_text" style={{marginBottom:'0.5rem'}}>Location</p>
        <div style={{ display: "flex", justifyContent: "space-between",alignItems :"center",marginBottom:'0.7rem' }}>
          <p className="medium_text">Event Booking</p>
          <p className="small" style={{fontStyle:'italic' ,fontWeight:600,paddingRight:'7px'}}>{number}</p>
        </div>

        <div className="image_url_div">
        <div><img className="thumbnail" src={imageURL} alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piscescelebs-1582312966.png?crop=0.293xw:0.587xh;0.0256xw,0.0737xh&resize=1200:*" alt="" /></div>
            <div><img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" alt="" /></div>
        </div>

      </div>
        <div className={` selectBTN   ${passShow ? " slected_activeBTN " :""}`} onClick={toggle} >

            <button id="text" className={`large`}  onClick={toggle}> 
            {passShow ? "Selected" : "Select"}</button>
        </div>

        
    </div>

    
  )
}

export default Singercard
