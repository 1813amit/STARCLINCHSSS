import React, { useRef } from 'react'
import Singer from './component/Singer'
import Thirdpage from './component/Thirdpage'
import Header from './component/Header'
import Footer from './component/Footer'
import "./App.css"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence } from 'framer-motion'
import Scrolltriggershop from './component/Scrolltrigershop'
import { ThemeProvider } from 'styled-components'
import { TweenMax } from 'gsap/gsap-core'

const App = () => {
  

  
  return (
    <>
    
   

      <Header  />
      <Singer />
      <Thirdpage />
      <Footer />
      


    </>
  )
}

export default App

