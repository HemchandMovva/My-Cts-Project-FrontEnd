import React from 'react'
import States from 'C:/MY_PROJECT/final/src/rawData/states.json'
import axios from 'axios'
import { useState } from 'react'
const AddNgo = () => {

    //RAW STATES DETAILS
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


    function addNgoToDataBase(e){

        e.preventDefault();
        var stateName = document.getElementById("addStateName").value;
        var ngoName = document.getElementById("addNgoName").value;
        var city = document.getElementById("addCity").value;
        var address = document.getElementById("addAddress").value;
        var InitialDeposit = Number(document.getElementById("addMoney").value);
        var stateId = getStateId(stateName);

        
        var postUrl = "http://localhost:400/NgoDetailsControllerImpl/insertDetails/stateId/"+stateId;
        axios.post(postUrl, {ngoName:ngoName, city:city, address:address, receivedFundInRupees:InitialDeposit})
        .then(response => {console.log(response); alert("Successfully added new ngo details") })
        .catch(err => {alert(err.response.data.message)})


        // alert("Successfully added new ngo details") 

    }


    return (
        <div>
            <div className="addNgo m-4 border border-warning">
                <form className='p-5' onSubmit={addNgoToDataBase}>
                    <div className='form-group'>
                        <label htmlFor='addStateName'>State</label>
                        <select id="addStateName" className='form-control'>
                            <option disabled>--Select state name</option>
                            {states.map(item => <option>{item.state_name}</option>)}
                        </select>
                    </div>
                    <div className='form-group'>
                        <lable htmlFor='addNgoName'>Ngo Name</lable>
                        <input type='text' id='addNgoName' className='form-control' placeholder='Ngo name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='addCity'>City</label>
                        <input type='text' id="addCity" className='form-control' placeholder='City'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='addAddress'>Address</label>
                        <input type='text' id="addAddress" className='form-control' placeholder='Address'/>
                    </div>
                    <div className='form-group'>
                        <lable htmlFor='addMoney'>Initial Deposit</lable>
                        <input type='number' min='0' id='addMoney' className='form-control' placeholder='Enter Initial Deposit'/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='form-control btn btn-primary mt-2' id='add'>Add </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNgo
