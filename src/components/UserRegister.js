import React from 'react'
import { Link } from 'react-router-dom'
import States from 'C:/MY_PROJECT/final/src/rawData/states.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Axios } from 'axios'

const UserRegister = () => {

    //CREATING THE USE NAVIGATE
    var navigate = useNavigate()

    var states = States

    function getStateId(stateName){
        var stateId="";
        for(var i=0; i<states.length; i++){
            if(states[i].state_name==stateName){
                stateId=states[i].state_id;
                break;
            }
        }
        return stateId;
    }

    function createUserAccount(e){

        e.preventDefault()
        var stateName = document.getElementById("newUserStateName").value;
        var newUserName = document.getElementById("newUserName").value;
        var newUserPhone = document.getElementById("newUserPhone").value;
        var newUserEmail = document.getElementById("newUserEmail").value;
        var newUserPassword = document.getElementById("newUserPassword").value;
        var stateId = getStateId(stateName)

        var newUserDetails = {userName:newUserName, userEmail:newUserEmail, userPhone:newUserPhone, password:newUserPassword}
        var url = "http://localhost:300/UserDetailsControllerImpl/insertDetails/stateId/"+stateId;
        axios.post(url, newUserDetails)
        .then(resp => console.log(resp))
        .then(err => console.log(err))

        alert("Successfully created account")

        navigate("/userLogin")

        


    }

    return (
        <div>
            <div className="border border-danger loginForm ">
                <form className="form" onSubmit={createUserAccount}>

                    {/* <div id="errorMessage"></div> */}
                    <div className='form-group'>
                        <label htmlFor='newUserStateName'>State</label>
                        <select id="newUserStateName" className='form-control'>
                            <option disabled>--Select state name</option>
                            {states.map(item => <option key={item.state_id}>{item.state_name}</option>)}
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='newUserName'>User name</label>
                        <input type='text' id='newUserName' className='form-control' placeholder='Enter user name' pattern='[a-zA-Z0-9\s]{3,}' title='Provide valid name' required/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='newUserPhone'>User phone</label>
                        <input type='text' id='newUserPhone' className='form-control' placeholder='Enter phone number' pattern='[6-9]{1}[0-9]{9}' title='Phone number starts with digits from 6 to 9 and must has length 10' required/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='newUserEmail'>Email address</label>
                        <input type="email" id="newUserEmail" className='form-control' placeholder='Enter email' required/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='newUserPassword'>Password</label>
                        <input type="password" id="newUserPassword" className='form-control' placeholder='Password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$" title="Provide valid password" required/>
                    </div>

                    <div className="form-group">
                        
                        <button type="submit" className='mt-2 newUserLogin'>Create Account</button>
                    </div>                
                </form>
            </div>
        </div>
    )
}

export default UserRegister
