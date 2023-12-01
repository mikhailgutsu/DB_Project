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
//
import Fst from "./Page/Rooms/fst";
import Scnd from "./Page/Rooms/scnd";
import Thirdd from "./Page/Rooms/third";
import Fr from "./Page/Rooms/fr";
import Five from "./Page/Rooms/five";
import Six from "./Page/Rooms/six";
import Seven from "./Page/Rooms/seven";
import Eight from "./Page/Rooms/eight";
import Nine from "./Page/Rooms/nine";
import Ten from "./Page/Rooms/ten";
//
import Eleven from "./Page/Rooms/eleven";
import Twelv from "./Page/Rooms/twelv";
import Tritiin from "./Page/Rooms/tritiin";
import Fortiin from "./Page/Rooms/fortiin";
import Fiftiin from "./Page/Rooms/fiftiin";
import Sixtiin from "./Page/Rooms/sixtiin";
import Seventiin from "./Page/Rooms/seventiin";
import Eitiin from "./Page/Rooms/eitiin";
import Ninetiin from "./Page/Rooms/ninetiin";
import Twentyone from "./Page/Rooms/twentyone";
//
import Twentytwo from "./Page/Rooms/twentytwo";
import Twentythree from "./Page/Rooms/twentythree";
import Twentyfour from "./Page/Rooms/twentyfour";
import Twentyfive from "./Page/Rooms/twentyfive";
import Twentysix from "./Page/Rooms/twentysix";
import Twenty from "./Page/Rooms/twenty";
import Twentyeight from "./Page/Rooms/twentyeight";
import Twentynine from "./Page/Rooms/twentynine";
import Twentyseven from "./Page/Rooms/twentyseven";
import Thirty from "./Page/Rooms/thirty";

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
          <Route path='/page/rooms/six' element={<Six />}></Route>
          <Route path='/page/rooms/seven' element={<Seven />}></Route>
          <Route path='/page/rooms/eight' element={<Eight />}></Route>
          <Route path='/page/rooms/nine' element={<Nine />}></Route>
          <Route path='/page/rooms/ten' element={<Ten />}></Route>

          <Route path='/page/rooms/eleven' element={<Eleven />}></Route>
          <Route path='/page/rooms/twelv' element={<Twelv />}></Route>
          <Route path='/page/rooms/tritiin' element={<Tritiin />}></Route>
          <Route path='/page/rooms/fortiin' element={<Fortiin />}></Route>
          <Route path='/page/rooms/fiftiin' element={<Fiftiin />}></Route>
          <Route path='/page/rooms/sixtiin' element={<Sixtiin />}></Route>
          <Route path='/page/rooms/seventiin' element={<Seventiin />}></Route>
          <Route path='/page/rooms/eitiin' element={<Eitiin />}></Route>
          <Route path='/page/rooms/ninetiin' element={<Ninetiin />}></Route>
          <Route path='/page/rooms/twenty' element={<Twenty />}></Route>

          <Route path='/page/rooms/twentyone' element={<Twentyone />}></Route>
          <Route path='/page/rooms/twentytwo' element={<Twentytwo />}></Route>
          <Route path='/page/rooms/twentythree' element={<Twentythree />}></Route>
          <Route path='/page/rooms/twentyfour' element={<Twentyfour />}></Route>
          <Route path='/page/rooms/twentyfive' element={<Twentyfive />}></Route>
          <Route path='/page/rooms/twentysix' element={<Twentysix />}></Route>
          <Route path='/page/rooms/twentyseven' element={<Twentyseven />}></Route>
          <Route path='/page/rooms/twentyeight' element={<Twentyeight />}></Route>
          <Route path='/page/rooms/twentynine' element={<Twentynine />}></Route>
          <Route path='/page/rooms/thirty' element={<Thirty />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App