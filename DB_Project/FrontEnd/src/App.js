import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Welcome from "./Welcome";
import First from "./Page/First";
import Second from "./Page/Second";
import Third from "./Page/Third";

function App()
{
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/page/first' element={<First />}></Route>
          <Route path='/page/second' element={<Second />}></Route>
          <Route path='/page/third' element={<Third />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App