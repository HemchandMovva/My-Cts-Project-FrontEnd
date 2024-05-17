import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'




const UserLogin = () => {

    // CREATING THE USE NAVIGATE OBJECT
    const navigate = useNavigate()

    //INITILIAZING THE VALUES OF USER DETAILS
    const[allUserDetails, setAllUserDetails] = useState([])

    //SETTING THE ALL DETAILS
    useEffect(()=>{
        axios.get("http://localhost:300/UserDetailsControllerImpl/getAllUsers")
        .then(resp => setAllUserDetails(resp.data))
    },[])

    //STORING THE USER DETAILS AFTER LOGIN
    var loggedUserDetails={}

    //FUNCTION TO CHECK VALID DETAILS IF VALID STORE THE DETAILS IN LOGGED USER DETAILS
    function isValidCredintials(enteredUserEmail, enteredUserPassword){
        for(var i=0; i<allUserDetails.length; i++){
            if(allUserDetails[i].userEmail==enteredUserEmail && allUserDetails[i].password==enteredUserPassword){
                loggedUserDetails=allUserDetails[i];
                console.log(loggedUserDetails)
                return true;
            }
        }
        return false
    }

    function checkCredentials(e){
        //PREVENTING THE RELOAD AND PRVIOUS FUNCTIONLAITIES 
        e.preventDefault()

        //GETTING THE EMAIL AND PASSWORD ENTERED BY USER
        var enteredUserEmail = document.getElementById("userEmail").value;
        var enteredUserPassword = document.getElementById("userPassword").value;

        if(isValidCredintials(enteredUserEmail, enteredUserPassword)){

            //WE HAVE TO TRANSFER THE DETAILS TO THE USER PAGE FOR DIFFERENTIATING THE DONATION HISTORY
            navigate("/userPage", {state:{loggedUserDetails}})

            document.getElementById("adminLogin").style.display="none"
            document.getElementById("userLogin").style.display="none"
            document.getElementById("home").style.display="none"
            document.getElementById("about").style.display="none"
            // document.getElementById("sectors").style.display="none"
            // document.getElementById("contactUs").style.display="none"
            // document.getElementById("help").style.display="none"

            //CREATING THE USER NAME
            var displayUserName = document.createElement("p")
            //setting id
            displayUserName.setAttribute("id", "userName")
            //assinging value
            displayUserName.textContent="Welcome "+loggedUserDetails.userName
            //append to the right side header
            document.getElementById("normalPageRight").appendChild(displayUserName)

            //CREATING THE HISTORY BUTTON
            var historyButton = document.createElement("button")
            //setting the id
            historyButton.setAttribute("id", "donationHistoryButton")
            //setting the text content
            historyButton.textContent="Donation history"
            //appending to the right side header
            document.getElementById("normalPageRight").appendChild(historyButton)


            //CREATING THE USER LOGOUT BUTTON
            var userLogout = document.createElement("button")
            //setting id
            userLogout.setAttribute("id", "userLogout")
            //setting the text content
            userLogout.textContent="Logout"
            //append to the right side bar
            document.getElementById("normalPageRight").appendChild(userLogout)
        

            //DONATION HISTORY FUNCTIONILITY GOES HERE-----------------
            historyButton.onclick=function(){
                navigate("/donationHistory", {state:{userId:loggedUserDetails.userId}})
            }

            //HOME FUNCTIONALITY
            // userHomeButton.onclick=function(){
            //     navigate("/userPage")
            // }
            //LOGOUT FUNCTIONLITY
            userLogout.onclick=function(){
                document.getElementById("adminLogin").style.display="block"
                document.getElementById("userLogin").style.display="block"

                document.getElementById("home").style.display="block"
                document.getElementById("about").style.display="block"
                // document.getElementById("sectors").style.display="block"
                // document.getElementById("contactUs").style.display="block"
                // document.getElementById("help").style.display="block"

                document.getElementById("userLogout").remove()
                document.getElementById("userName").remove()
                document.getElementById("donationHistoryButton").remove()
                // document.getElementById("userHomeButton").remove()
                navigate("/userLogin")
            }

        }else{
            document.getElementById("errorMessage").textContent="Invalid login credentials"
        }
    };

    return (
        <div>
            <div className="loginForm ">
                <form className="form" onSubmit={checkCredentials} >

                    <div id="errorMessage"></div>

                    <div className='form-group'>
                        <label htmlFor='userEmail'>Email address</label>
                        <input type="email" id="userEmail" className='form-control' placeholder='Enter email' required/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='userPassword'>Password</label>
                        <input type="password" id="userPassword" className='form-control' placeholder='Password' required/>
                    </div>

                    <div className="rememberMe mb-2">
                        <div className='remember'><input type="checkbox"/>Remember me</div>
                        <Link to="/forgotPassword" className='forgotPassword'>Forgot Password?</Link>
                    </div>
                
                    <button type="submit" className='mb-2 userLogin'>Login</button><br/>
                    <div className="dontHaveAccount">Don't have an account? <Link to="/userRegister">Register</Link></div>
                </form>
            </div>

            {/* <button onClick={Hook}>Button</button> */}
        </div>
    ) 
}

export default UserLogin
