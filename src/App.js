import React from 'react'
import { render } from 'react-dom'
import Class from './Component/Class'
import Footer from './Component/Footer'
import Library from './Component/Library'
import Slide from './Component/Slide'
import Student from './Component/Student'
const App = ()=>{
  return(
    <>
      <Slide/>
      <Student/>
      <Class/>
      <Library/>
      <Footer/>
    </>
  )
}
export default App
