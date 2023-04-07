import React, { useEffect, useState } from 'react'
import "../Style/Singer.css"
import Singercard from './Singercard'
import Lodding from './Lodding'
import  Typewriter  from 'typewriter-effect'
import { gsap } from 'gsap'
import CountUp from 'react-countup'



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '201d922ca8msh0eb20de7c53f690p120541jsne64d81f34302',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};


const Singer = () => {

    const [pro, setPro] = useState([])
    const [file, setFile] = useState(true)

   
    useEffect(() => {

        fetch('https://imdb8.p.rapidapi.com/auto-complete?q=singer', options)
         .then((response) => response.json())
         .then((response)=>{
            setPro(response.d)  
            console.log(response.d)
            
            setFile(false)  
            
         })
         .catch((err) => console.error(err));

      
    }, [])

    useEffect(() => {
        const thumbnailImages = document.getElementsByClassName("thumbnail");
        for (let i = 0; i < thumbnailImages.length; i++) {
          
          thumbnailImages[i].addEventListener("click", function () {
            ;
            const mainImage =
              this.closest(".SingerCard").querySelector(".main-image");
            mainImage.src = this.src;
          });
        }
    
       
      }, [pro]);


      useEffect(()=>{
        const tl = gsap.timeline()
    
        tl.from(".heading",{
          y:-500,
          ease:"power4.out",
          delay:.5,
          duration:1.8,
          stagger:{
            amount:0.4,
          }
        })
      })
      useEffect(()=>{
        const tl = gsap.timeline()
    
        tl.from(".hed",{
          x:-500,
          ease:"power4.out",
          delay:1,
          duration:1.8,
          stagger:{
            amount:0.4,
          }
        })
      })
      useEffect(()=>{
        const tl = gsap.timeline()
    
        tl.from(".budget_tag",{
          x:500,
          ease:"power4.out",
          delay:1,
          duration:1.8,
          stagger:{
            amount:0.4,
          }
        })
      })




      return file ?(
        <Lodding />
      ):(

        <>
          
  

  <div className="Singers maxWidth">
    <h1 className="heading">Shortlist</h1>
    <p className="details">Details :</p>
    <div className="details_div">
      <div>
        <p className="hed">Event Date</p>
        <p className="smlhead"> 2023-02-22</p>
      </div>
      <div>
        <p className="hed">Location</p>
        <p className="smlhead"> Delhi, India</p>
      </div>
      <div className="budget_div">
        <p className="hed">Budget</p>
        <div className="budget_tag">
          <p className="hed"> ₹ <CountUp delay={1} end={500000} duration={3} /></p>
        </div>
      </div>
    </div>

    <center>
      <h1 className="SingersHeading1">Singers</h1>
      <p className="medium textmaxwidth" style={{color:"black"}}>
        <Typewriter 
        options={{
          autoStart:true,
          loop:true,
          delay:40,
          strings:[
            "Select an artist that matches your vibe...."
          ],
        }}
        
       />
      </p>
    </center>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}

    >
    
      {pro?.map((ele) => {
        return (
          <Singercard
            key={ele.id}
            name={ele.l}
            number={ele.rank}
            imageURL={ele.i.imageUrl}
          />
        );
      })}
    </div>
    
  </div>
        </>

      )
      

    }

export default Singer
