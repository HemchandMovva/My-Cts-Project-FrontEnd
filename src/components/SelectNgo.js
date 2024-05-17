import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import $ from 'jquery'
import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SelectNgo = () => {

    //CREATING THE USELOCATION OBJECT
    const location  = useLocation()

    const {state}   = location

    //NGO DETAILS
    const ngoList   = state.ngoList

    //SECTOR NAME OF SELECTED NGO'S
    const sectorName= state.name

    //USER DETAILS
    const userId    = state.userId
    const userName  = state.userName
    const userMail  = state.mail
    const userPhone = state.userPhone
    const password  = state.password

    // const [open, setOpen] = useState(false)

    //FOR SETTING THE VALUES AFTER SELECTING THE NGO
    const[sector, setSector] = useState("")
    const[ngoId, setNgoId] = useState("")
    const[ngoName, setNgoName] = useState("")
    const[city, setCity] = useState("")
    const[address, setAddress] = useState("")
    const[stateId, setStateId] = useState("")

    // console.log(location)
    // alert(state)
    // console.log(ngoList)
    
    const Payment =(sectorName, ngoId, ngoName, city, address, stateId, e) =>{
        e.preventDefault()
        setSector(sectorName)
        setNgoId(ngoId)
        setNgoName(ngoName)
        setCity(city)
        setAddress(address)
        setStateId(stateId)
        // alert(userId+" "+userName+" "+userMail+" "+userPhone+" "+password)

        document.getElementById("donNgoId").textContent = ngoId
        document.getElementById("donNgoName").textContent = ngoName
        document.getElementById("donCity").textContent = city
        document.getElementById("donAddress").textContent = address
        document.getElementById("donState").textContent = stateId


        $(".donationTab").slideDown(1200)
        // alert(sectorName+" "+ngoId)
        // setOpen(true)
    }

    function closeTab(e){
        e.preventDefault()
        $(".donationTab").slideUp(1100)
    }

    function donateAndStoreInHistory(){

        var amount = document.getElementById("donMoney").value
        if(amount>0){
            var donationHistoryObject = {ngoId:ngoId, sector:sectorName, donatedFundInRupees:amount}
            
            axios.post("http://localhost:600/DonationHistoryControllerImpl/insertDetails/userId/"+userId, donationHistoryObject)
            .then(resp => console.log(resp))
            $(".donationTab").slideUp(1100)
            alert("success")

        }else{
            alert("Entered money shold be greater than 100")
        }
    }
    
    return (
        <div>
            <h1 style={{ textAlign:"center"}} className='stickyCheck m-3'>NGO'S under sector: {sectorName}</h1>

            <div className='ngoCardsContainer'>
                {ngoList.map(item => 
                    
                    <>
                        <div key={item.ngoId} className='ngoCards' onClick={(event) => Payment(sectorName, item.ngoId, item.ngoName, item.city, item.address, item.stateId, event)}>
                            <li><b>NGO ID:</b> {item.ngoId}</li>
                            <li><b>NGO NAME:</b> {item.ngoName}</li>
                            <li><b>CITY:</b> {item.city}</li>
                            <li><b>ADDRESS:</b> {item.address}</li>
                            <li><b>STATE:</b> {item.stateId}</li>
                            {/* <li><b>FUND RECEIVED:</b> {item.receivedFundInRupees}</li> */}
                            <div className='pay'>
                            PAY
                            </div>
                        </div>
                        
                    
                    </>
                
                )}

                <div className='donationTab border border-warning m-auto'>
                    
                    <div className='cancel'>
                        <button className='cancelButton' onClick={closeTab}>Cancel</button>
                    </div>
                    <div className='donWidth'>
                        <h5>SECTOR: </h5>
                        <p id='donSector'>{sectorName}</p>
                    </div>
                    <div className='donWidth'>
                        <h5>NGO ID: </h5>
                        <p id='donNgoId'></p>
                    </div>
                    <div className='donWidth'>
                        <h5>NGO NAME:</h5>
                        <p id='donNgoName'></p>
                    </div>
                    <div className='donWidth'>
                        <h5>CITY: </h5>
                        <p id='donCity'></p>
                    </div>
                    <div className='donWidth'>
                        <h5>ADDRESS: </h5>
                        <p id='donAddress'></p>
                    </div>
                    <div className='donWidth'>
                        <h5>STATE: </h5>
                        <p id='donState'></p>
                    </div>
                    <div className='d-flex  donFooter'>
                        <label htmlFor='donMoney'>Donate:</label>
                        <input type='number' min={100} id='donMoney' placeholder='Money to donate'/>
                        <button className='paymentButton' onClick={donateAndStoreInHistory}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SelectNgo
