import Adduser from "./component/Adduser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Update from "./component/Update";
import { ToastContainer } from 'react-toastify';






export default function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route>
   <Route path="/" element={<Adduser/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path="/update/:id" element={<Update/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
   <ToastContainer />
   
 
   </div>
  )
}