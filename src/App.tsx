import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from "./pages/Dashboard.tsx"
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {


  return <BrowserRouter>
  <Routes>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/signin' element={<Signin></Signin>}></Route>
  <Route path='/dashboard' element={<Dashboard shared={false} ></Dashboard>}></Route>
  <Route path="/brain/:id" element={<Dashboard shared={true}></Dashboard>}></Route>
  </Routes>
  
  </BrowserRouter>
  
}

export default App
