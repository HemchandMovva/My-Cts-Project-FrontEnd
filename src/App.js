import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Help from './components/Help';
import NormalPage from './pages/NormalPage';
import About from './components/About';
import Sectors from './components/Sectors';
import adminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import Contact from './components/Contact';
import AddNgo from "./components/AddNgo.js";
import ModifyNgo from "./components/ModifyNgo.js"
import DeleteNgo from "./components/DeleteNgo.js"
import { useEffect } from 'react';
import axios from 'axios';
import UserPage from './pages/UserPage.js';
import UserRegister from './components/UserRegister.js';
import SelectNgo from './components/SelectNgo.js';
import DonationHistory from './components/DonationHistory.js';

function App() {
    return (
        
        // <HomePage/>

        <>

        <BrowserRouter>
            <NormalPage/>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/sectors" Component={Sectors}></Route>
                <Route path="/contactUs" Component={Contact}></Route>
                <Route path="/help" Component={Help}></Route>
                <Route path="/adminLogin" Component={adminLogin}></Route>
                <Route path="/userLogin" Component={UserLogin}></Route>
            </Routes>
            <Routes>
                <Route path="/adminPage" Component={AdminPage}/>
                <Route path="/addNgo"Component={AddNgo}/>
                <Route path="/modifyNgo"Component={ModifyNgo}/>
                <Route path="/deleteNgo"Component={DeleteNgo}/>
                <Route path="/userPage" Component={UserPage}/>
                <Route path="/userRegister" Component={UserRegister}/>
                <Route path="/selectNgo" Component={SelectNgo}/>
                <Route path='/donationHistory' Component={DonationHistory}/>
            </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default App;


{/* <HomePage/>
            <Help data="workiing"/>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" Component={HomePage}/> */}
            //         <Route path="/adminPage" Component={AdminPage}/>
            //         <Route path="/userPage" Component={UserPage} />
            //     </Routes>
            // </BrowserRouter> */}