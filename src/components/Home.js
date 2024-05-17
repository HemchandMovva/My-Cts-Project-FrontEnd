import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import About from './About'

const Home = () => {

    const navigate = useNavigate();
    function check(){
        navigate("/adminPage")
    }

    return (
        <div className='homePage mx-2'>
            <div className="homeQuote">
                {/* <h1 className="">Giving is not just about making a donation. it is about making a difference</h1> */}
                <p>Welcome to Indian Ngo's Management System</p>
                {/* <p>Doing Nothing is Not An Option of Our Life</p> */}
            </div>


            {/* <div className='borde border-warning d-flex justify-content-center '>
                <div className='border border-warning m-4 p-3 homePageFooter d-flex justify-content-center'>
                    FOOTER
                </div>
            </div> */}
            
        </div>
    )
}

export default Home


// const navigate = useNavigate()
// function OpenAdminpage(){
    
//     navigate("/adminPage")
// }

// function OpenUserPage(){
//     // navigate("/UserPage")
//     // document.getElementById("adminLogin").remove()
//     // var logout = document.createElement("button")
//     // logout.setAttribute("id", "but")
//     // logout.textContent="logout"
//     // document.body.append(logout)
//     alert("Hello") 
// }

{/* <div class="d-flex m-2 border">
                <img src="https://www.logolynx.com/images/logolynx/a6/a68cf673b01d3f6dcaa98119d5baf8b1.jpeg" width="100px" height="100px"></img>

                <div className="homeLeftMenu d-flex m-auto">
                    <div >
                        <Link to="/" id="home">Home</Link>
                    </div>
                    <div > 
                        <Link to="/About" id="about">About</Link>
                    </div>
                    <div >
                        <Link to="/Help" id="help">Help</Link>
                    </div>
                    <div >
                        <Link to="/UserLogin" id="userLogin">User Login</Link>
                    </div>
                </div>

                <div className="homeRightMenu d-flex m-auto">
                    <div >
                        <Link to="/AdminLogin" id="adminLogin">Admin Login</Link>
                    </div>
                    <div >
                        <Link to="/Search" id="search">Search</Link>
                    </div>
                </div>
            
            <br></br>
            
            </div> */}
            // {/* <butt