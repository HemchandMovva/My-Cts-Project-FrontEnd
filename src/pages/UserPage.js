import React, { useEffect, useState } from 'react'

import Sectors from 'C:/MY_PROJECT/final/src/rawData/sectorNames.json'
import { Link, useNavigate } from 'react-router-dom'
import { event } from 'jquery'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const UserPage = () => {

    //TO ACCEPT THE STATE COMING FROM LOGIN PAGE CREATE THE location
    const location = useLocation()

    const {state}   = location
    const userId    = state.loggedUserDetails.userId
    const userName  = state.loggedUserDetails.userName
    const userEmail = state.loggedUserDetails.userEmail
    const userPhone = state.loggedUserDetails.userPhone
    const password  = state.loggedUserDetails.password

    console.log(state)

    // alert(userMail)



    var [ngoList, setNgoList] = useState([{ngoId:"", ngoName:"", city:"", address:"", receivedFundInRupees:0, stateId:""}])
    var [name, setName] = useState("")

    //CREATING THE USE NAVIGATE
    var navigate = useNavigate();

    var sectorName =Sectors

    const SelectNgo=(sectorname, e)=>{
        e.preventDefault()

        //GETTING THE DATA FROM BACKEND
        var url = "http://localhost:500/SectorsControllerImpl/selectNgosBySectorName/"+sectorname
        axios.get(url)
        .then(resp => {setNgoList(resp.data.ngoDetailsResponseList); setName(resp.data.sectorName)})
        // .then(resp => setNgoObject(resp.data))
        .catch(err => {alert(err.response.data.message)})
        }
        // console.log(ngoList)

        // setTimeout(setNgoList({ngoId:"k", ngoName:"sfv", city:"cd", address:"", receivedFundInRupees:0, stateId:"aa"}), 3000)
        // alert(sectorName)
        navigate("/selectNgo",{state:{ngoList, name:name, mail:userEmail, userId:userId, userName:userName, userPhone:userPhone, password:password}})
        // navigate("/selectNgo", {state:{ngoObject}})
        // console.log(ngoList)
    // return false
    



    return (
        <div className="userPage">
            <div style={{ textAlign:"center"}} className="stickyCheck m-5"><h3>Select sector you want to donate</h3></div>
            <div className='userPageCards m-3'>
                {sectorName.map(item => 

                <div className='d-flex flex-column flex-wrap w-25  p-2 m-1 card' onClick={(event) => SelectNgo(item.sector_name, event)} >
                    <img className="sector" id="sector" src={item.back_image} ></img>
                    <span className='w-100 text-align-center downName mt-1'>{item.sector_name}</span>
                </div>    
                    
            )}
        
            </div>
        </div>
  )
}

export default UserPage
