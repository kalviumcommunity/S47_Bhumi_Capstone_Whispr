import React,{lazy} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Home= lazy(() => import("./pages/Home"));
const Login= lazy(() => import("./pages/Login"));
const Chat = lazy(()=>import("./pages/Chat"))
const Groups = lazy(()=>import("./pages/Groups"))
// dynamic import jabh jarurat hogi tabhi import hoga

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat/:chatId'element={< Chat/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/groups'element={<Groups/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
