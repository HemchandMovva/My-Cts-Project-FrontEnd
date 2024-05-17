import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About';
import Help from './Help';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';

const HomePage = () => {
  return (
    <div>
        {/* <BrowserRouter>
            <Home/>
            <Routes>
                <Route path="/About" Component={About}/>
                <Route path="/Help" Component={Help}/>
                <Route path="/UserLogin" Component={UserLogin}/>
                <Route path="/Adminlogin" Component={AdminLogin}/>
                <Route path="/UserPage" Component={UserPage}/>
            </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default HomePage
