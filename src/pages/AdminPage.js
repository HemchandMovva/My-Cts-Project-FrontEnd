import React from 'react'
import { Link } from 'react-router-dom'
const AdminPage = () => {

    return (
        <div className='adminPage mx-4'>

            <div className='adminOperations m-3'>
                <Link to="/addNgo" style={{ textDecoration: "none" }}><p id="addNgo">Add NGO</p></Link>
            </div>
            <div className='adminOperations m-3'>
                <Link to="/modifyNgo" style={{ textDecoration: "none" }}><p id="modifyNgo">Modify NGO</p></Link>
            </div>
            
            {/* <div className='adminOperations m-3'> */}
                {/* <Link to="/deleteNgo" ><p id="deleteNgo">Delete NGO</p></Link> */}
            {/* </div> */}

        </div>
    )
}

export default AdminPage
