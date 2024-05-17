import React from 'react'

const About = () => {
  return (
    
    <div className='about m-auto  p-3'>  
        <h3>About Application</h3>

          <ul>
                <li>The Indian Ngo Management System is a platform that connects the all non governmental organizations in India.</li>
                <li>This application makes it easier to find out the ngo based on the sector the user wants to donate.</li>
                <li>Each state has one admin who has the authority to adding new ngo and deleting the existing ngo.</li>
          </ul>
          <h3>Users choices</h3>
          <ul className="fa-ul">
                <li className="fa-li"><i class="fas fa-check-square"></i>The users of this application can able to donate to the trusted ngos in india.</li>
                <li>After logging into the application by using credentials, user can able to find the ngo's from different sectors and from particular states.</li>
                <li>By using payment option, user can able to donate to the particualr ngo </li>
                <li>All donations will be sotred in donations history after successfull donation.So user can check his past donations</li>
          </ul>
    </div>
  )
}

export default About
