
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import Home from "./pages/home.jsx";
import MobileVerification from "./pages/MobileVerification.jsx";
import Login from "./pages/Login.jsx";
import AuthPage from './components/AuthPage.jsx';
import ConfirmEmail from './components/confirmEmail.jsx';
import DeviceVerification from './pages/deviceVerification.jsx';
import HelpCenter from './pages/helpCenter.jsx';




function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/exampleImage" element={<MobileVerification/>}/>
            <Route path="/example1Image" element={<Login />}/>
            <Route path="/Profile" element={<AuthPage />}/>
            <Route path="/confirm-email" element={<ConfirmEmail />}/>
            <Route path="/Device-Verification" element={<DeviceVerification />}/>
            <Route path='/HelpCenter' element={<HelpCenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
