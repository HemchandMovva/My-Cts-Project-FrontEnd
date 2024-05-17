import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'

import AdminsData from "C:/MY_PROJECT/final/src/rawData/AdminsData.json"
const AdminLogin = () => {

    //CREATING TEH USENAVIGATE
    const navigate=useNavigate()

    //STORING THE ALL ADMIN DETAILS
    var admins = AdminsData
    //getting the keys values
    var keys = Object.keys(admins)
    var values = Object.values(admins)
    
    //STORING THE ADMIN DETAILS AFTER LOGIN
    var adminDetails={}
    
    //CHECKING THE CREDENTIALS
    function isValidCredintials(adminId, adminEmail, adminPassword){
        for(var i=0; i<admins.length; i++){
            if(adminId==admins[i].admin_id && adminEmail==admins[i].admin_email && adminPassword==admins[i].admin_password){
                adminDetails=admins[i];
                return true;
            }
        }
        return false;
    }
  
    function openAdminPage(e){

        //Preventing the reload
        e.preventDefault()

        //GETTING THE INPUT VALUES
        var adminId = document.getElementById("selectAdminId").value;
        var adminEmail = document.getElementById("adminEmail").value;
        var adminPassword = document.getElementById("adminPassword").value;
        
        if(isValidCredintials(adminId, adminEmail, adminPassword)){
            navigate("/adminPage")

            //REMOVING THE LOGIN TABS IN NAVBAR
            // $("#userLogin").toggle()
            // $("#adminLogin").toggle()

            document.getElementById("adminLogin").style.display="none"
            document.getElementById("userLogin").style.display="none"
            

            //CREATING THE ADMIN NAMES AND LOGOUT
            
            var adminName = document.createElement("p")
            adminName.setAttribute("id", "adminName")
            adminName.innerHTML="Welcome "+adminDetails.admin_name;
            document.getElementById("normalPageRight").appendChild(adminName)

            var adminLogout = document.createElement("button")
            adminLogout.setAttribute("id", "adminLogout")
            adminLogout.textContent="Logout"
            document.getElementById("normalPageRight").appendChild(adminLogout)

            //FUNCTIONALITY FOR LOGOUT
            adminLogout.onclick=function(){
                // $("#adminLogin").toggle()
                // $("#userLogin").toggle()
                document.getElementById("adminLogin").style.display="block"
                document.getElementById("userLogin").style.display="block"

                document.getElementById("adminLogout").remove()
                document.getElementById("adminName").remove()
                navigate("/adminLogin")
            }

            
        }else{
            document.getElementById("errorMessage").textContent="Invalid login credeintials"
            // alert("Invalid credintials")
        }
    }

  return (
    <div>
        <div className=" loginForm ">
            <form className="form" onSubmit={openAdminPage}>

                <div className='' id="errorMessage"></div>

                <div className='form-group'>
                    <label  htmlFor='adminID'>Admin id</label>
                    <select className='form-control' id='selectAdminId'>
                        <option disabled>--Select--</option>
                        {admins.map(item => <option>{item.admin_id}</option>)}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='adminEmail'>Email address</label>
                    <input type="email" id="adminEmail" className='form-control' placeholder='Enter email' required/>
                </div>

                <div className='form-group'>
                    <label htmlFor='adminPassword'>Password</label>
                    <input type="password" id="adminPassword" className='form-control' placeholder='Password' required/>
                </div>

                <div className="rememberMe mb-2">
                    <div className='remember'><input type="checkbox"/>Remember me</div>
                    <Link to="/forgotPassword" className='forgotPassword'>Forgot Password?</Link>
                </div>
                
                <button type="submit" className='login mb-2' >Login</button><br/>
                {/* <div className="dontHaveAccount">Don't hav an account? <Link to="/register">Register</Link></div> */}
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
