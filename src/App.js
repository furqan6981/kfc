import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Termscondition from './Screens/Termscondition'
import Login from './Screens/Login'
import DetailPage from './Screens/DetailPage'
import DetailPage2 from './Components/DetailPage2'

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about-us' element={ <About/>} />
        <Route path='/contact-us' element={ <Contact/>} />
        <Route path='/terms-condition' element={ <Termscondition/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/products/:id' element={ <DetailPage/>} />
        <Route path='/product/:id' element={ <DetailPage2/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
