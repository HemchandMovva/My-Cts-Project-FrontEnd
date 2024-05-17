import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const DonationHistory = () => {


    const location = useLocation()

    const {state} = location

    const userId = state.userId

    // alert(userId)

    const[history, sethistory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:600/DonationHistoryControllerImpl/selectByUserId/"+userId)
        .then(resp => sethistory(resp.data))
        .then(err => console.log(err))
    }, [])

    return (
        <div>
            <table className='table table-hover m-2'>
                <tr>
                    <th>Donation Id</th>
                    <th>Sector</th>
                    <th>Ngo Id</th>
                    <th>User Id</th>
                    <th>Fund donated</th>
                    <th>Time</th>
                </tr>
                <tbody>
                {history.map(item => 
                <tr>
                    <td key={item.donationId}>{item.donationId}</td>
                    <td key={item.donationId}>{item.sector}</td>
                    <td key={item.donationId}>{item.ngoId}</td>
                    <td key={item.donationId}>{item.userId}</td>
                    <td key={item.donationId}>{item.donatedFundInRupees}</td>
                    <td key={item.donationId}>{item.date}</td>
                </tr>
                
                )}
                </tbody>
                
            </table>
           
        </div>
    )
}

export default DonationHistory
