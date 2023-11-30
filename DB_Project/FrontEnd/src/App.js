import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Welcome from "./Welcome";
import First from "./Page/First";
import Second from "./Page/Second";
import Third from "./Page/Third";
import Info from "./Page/Info";
import Fst from "./Page/Rooms/fst";
import Scnd from "./Page/Rooms/scnd";
import Thirdd from "./Page/Rooms/third";
import Fr from "./Page/Rooms/fr";
import Five from "./Page/Rooms/five";

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
          <Route path='/page/info' element={<Info />}></Route>
          <Route path='/page/rooms/fst' element={<Fst />}></Route>
          <Route path='/page/rooms/scnd' element={<Scnd />}></Route>
          <Route path='/page/rooms/third' element={<Thirdd />}></Route>
          <Route path='/page/rooms/fr' element={<Fr />}></Route>
          <Route path='/page/rooms/five' element={<Five />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App