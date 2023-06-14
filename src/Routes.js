
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./Component/Log in_out/Login"
import Signup from "./Component/Log in_out/Sign-up "
import HomePageMain from "./Component/HomePage/HomePageMain";
import Pay from "./Component/PayPal/Pay";
import Admin from "./Component/HomePage/Admin";
import ResetPass from "./Component/Log in_out/ResetPass";
import React from "react";
import WarpMyBar from "./Component/WarpMyBar"



function App() {
  return (
    <>
      <WarpMyBar body={
        <Routes>

          <Route path="" element={<Login />} />
          <Route path="Login" element={<Login />}  />
          <Route path="/Signup" element={<Signup />}  />
          <Route path="HomePageMain/*" element={<HomePageMain />} />
          <Route path="Admin/*" element={<Admin />} />
          <Route path="pay" element={<Pay />} />
          <Route path="ResetPass" element={<ResetPass />}  />

        </Routes>
      } />
    </>
  )
}


// function App() {
//   return (
//     <>

//       <Routes>

//         <Route path="" element={<WarpMyBar body={ <Login />} />} />
//         <Route path="Login" element={<WarpMyBar body={ <Login />} />} />
//         <Route path="/Signup" element={<WarpMyBar body={ <Signup />} />} />
//         <Route path="HomePageMain/*" element={<HomePageMain />} />
//         <Route path="Admin/*" element={<Admin />} />
//         <Route path="pay" element={<Pay />} />
//         <Route path="ResetPass" element={  <WarpMyBar body={ <ResetPass />} />}/>

//       </Routes>
//     </>
//   )
// }

export default App