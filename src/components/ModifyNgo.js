import React from 'react'
import States from 'C:/MY_PROJECT/final/src/rawData/states.json'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery'

const ModifyNgo = () => {

    // var states = States

    const [ngoData, setNgoData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:400/NgoDetailsControllerImpl/selectAll")
        .then(x => setNgoData(x.data))
    },[])

    //FOR GETTIN THE VALUES IN TEXT BOXES
    function transferDetails(){
        var selectedNgo = document.getElementById('test').value;
        for(var i=0; i<ngoData.length; i++){
            if(ngoData[i].ngoName===selectedNgo){
                document.getElementById("updateNgo").style.display="block";
                document.getElementById("ngoid").value=ngoData[i].ngoId;
                document.getElementById("ngoname").value=ngoData[i].ngoName;
                document.getElementById("ngocity").value=ngoData[i].city;
                document.getElementById("ngoaddress").value=ngoData[i].address;
                //ENABLING THE EDITING
                // $("#updateNgo").show()
                document.getElementById("ngoname").disabled=false
                document.getElementById("ngocity").disabled=false
                document.getElementById("ngoaddress").disabled=false
                document.getElementById("updateFund").disabled=false
                document.getElementById("updateButton").style.display="block"
                document.getElementById("deleteButton").style.display="none"

                // document.getElementById("deleteButton").style.display="none"
                document.getElementById("updateButton").disabled=false
                break;
            }
        }
    }

    function checkDetails(){
        var selectedNgo = document.getElementById('test').value;
        for(var i=0; i<ngoData.length; i++){
            if(ngoData[i].ngoName===selectedNgo){
                // document.getElementById("updateNgo").style.display="block";
                document.getElementById("ngoname").disabled=true
                document.getElementById("ngocity").disabled=true
                document.getElementById("ngoaddress").disabled=true
                document.getElementById("updateFund").disabled=true

                document.getElementById("deleteButton").disabled=false
                document.getElementById("updateButton").style.display="none"
                document.getElementById("deleteButton").style.display="block"

                document.getElementById("updateNgo").style.display="block";
                document.getElementById("ngoid").value=ngoData[i].ngoId;
                document.getElementById("ngoname").value=ngoData[i].ngoName;
                document.getElementById("ngocity").value=ngoData[i].city;
                document.getElementById("ngoaddress").value=ngoData[i].address;

                break;
            }
        }
    }


    function updateChanges(e){
        //GETTING THE DATA TO BE UPDATED
        e.preventDefault()
        // alert("i am working")
        var ngoId = document.getElementById("ngoid").value;
        var ngoName = document.getElementById("ngoname").value;
        var ngoCity = document.getElementById("ngocity").value;
        var ngoAddress = document.getElementById("ngoaddress").value;
        var fund = document.getElementById("updateFund").value;

        //GETTING THE URL'S
        var updateNameUrl = "http://localhost:400/NgoDetailsControllerImpl/updateName/ngoId/"+ngoId+"/name/"+ngoName;
        var updateFundUrl = "http://localhost:400/NgoDetailsControllerImpl/updateFund/ngoId/"+ngoId+"/fund/"+fund;
        var updateCityAddressUrl = "http://localhost:400/NgoDetailsControllerImpl/updateCityAddress/ngoId/"+ngoId+"/city/"+ngoCity+"/address/"+ngoAddress;
        
        //UPDATE NAME
        axios.put(updateNameUrl)
        .then(resp => console.log(resp))

        //UPDATE ADDRESSES
        axios.put(updateFundUrl)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))

        //UPDATE FUND
        axios.put(updateCityAddressUrl)
        .then(resp => console.log(resp))

        alert("successfully updated details")

    }

    function deleteNgo(e){
        
        var ngoId = document.getElementById("ngoid").value;
        document.getElementById("deleteButton").disabled=false
        document.getElementById("updateButton").style.display="none";

        if(window.confirm("Are you sure you want to delete the ngo "+ngoId)){
            var deleteUrl = "http://localhost:400/NgoDetailsControllerImpl/deleteById/"+ngoId;
            axios.delete(deleteUrl)
            .then(response => {console.log(response);alert(response.data)})
            .catch(err => {alert(err.response.data.message)})
        }
        e.preventDefault()
    }
    function hello(){
        alert("hello")
    }

    return (
        <div>
            <div className='searchBar m-4 d-flex'>
                <h3>Select Ngo:</h3>
                <input type='text' className='w-45' list='ngoData' id='test'></input>
                <datalist id='ngoData'>
                    <option disabled>--Select--</option>
                    {ngoData.map(item =><option className='text'>{item.ngoName}</option>)}
                </datalist>
                <button type='submit'  className='update' onClick={transferDetails}>Update</button>
                <button type='submit'  className='delete' onClick={checkDetails}>Delete</button>
            </div>
            <div className='modifyArea m-4 d-flex'>

                {/* UPDATING */}
                <form  id='updateNgo' onSubmit={updateChanges}>
                    <div className='form-group' >
                        <label htmlFor='ngoid' >Ngo Id: </label>
                        <input type='text' id='ngoid' className='form-control' disabled/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='ngoname' >Ngo Name: </label>
                        <input type='text' id='ngoname' className='form-control' disabled/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='ngocity' >Ngo City: </label>
                        <input type='text' id='ngocity' className='form-control' disabled/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='ngoaddress' >Ngo Address: </label>
                        <input type='text' id='ngoaddress' className='form-control' disabled/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='updateFund'>Update Fund:</label>
                        <input type='number' id='updateFund' min='0' className='form-control' placeholder='Fund to be added' required disabled/>
                    </div>

                    <div className='form-group' id='but'>
                        <button type='submit' id='updateButton' className='submitButton form-control btn btn-primary' disabled >Update Changes</button>
                    </div>
                </form>

                <form onSubmit={deleteNgo} >
                    <button type='submit' id='deleteButton' className='mx-2 mt-0 mb-2 submitButton form-control ' disabled >Delete Ngo</button>
                </form>
            </div>
        </div>
    )
}

export default ModifyNgo
