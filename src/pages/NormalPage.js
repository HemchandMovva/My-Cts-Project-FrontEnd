import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'
const NormalPage = () => {

  return (
    <div class="normalPage">
        <div className="normalPageNav d-flex border border-danger mb-5 mx-2 mt-2">
            <img src="https://www.logolynx.com/images/logolynx/a6/a68cf673b01d3f6dcaa98119d5baf8b1.jpeg" width="100px" height="100px" />
            <div className='normalPageLeftNav d-flex m-auto'>
                <div>
                    <Link to="/" id="home" className='home'>Home</Link>
                </div>
                <div>
                    <Link to="/about" id="about">About</Link>
                </div>
                {/* <div>
                    <Link to="/sectors" id="sectors">Sectors</Link>
                </div> */}
                {/* <div>
                    <Link to="/contactUs" id="contactUs">Contact</Link>
                </div> */}
                {/* <div>
                    <Link to="/help" id="help">Help</Link>
                </div> */}
                
            </div>
            <div className='normalPageRight d-flex m-auto' id="normalPageRight">
                <div>
                    <Link to="/adminLogin" id="adminLogin">Admin Login</Link>
                </div>
                <div>
                    <Link to="userLogin" id="userLogin">User Login</Link>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default NormalPage
