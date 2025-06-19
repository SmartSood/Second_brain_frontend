import './App.css'
import {Dashboard} from "./pages/Dashboard.tsx"
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Landing } from './pages/Landing.tsx'
import { Demo } from './pages/Demo.tsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {


  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing></Landing>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/signin' element={<Signin></Signin>}></Route>
  <Route path='/dashboard' element={<Dashboard shared={false} ></Dashboard>}></Route>
  <Route path="/brain/:id" element={<Dashboard shared={true}></Dashboard>}></Route>
  <Route path="/demo" element={<Demo></Demo>}></Route>
  </Routes>
  
  </BrowserRouter>
  
}

export default App
