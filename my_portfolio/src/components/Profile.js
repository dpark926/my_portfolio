import React from 'react'
import '../styles/Profile.css'

let summary = "FULL STACK WEB DEVELOPER WITH A KEEN INTEREST IN SOLVING DIFFICULT PROBLEMS, AND EXPERIENCE IN JAVASCRIPT, RUBY BASED PROGRAMMING, AND EVENT MANAGEMENT. MY TECHNICAL ABILITIES, COMMUNICATION SKILLS, AND TALENT FOR LOGISTICS AND PLANNING HELPS ME AND CREATIVE SOLUTIONS THROUGH CODE FOR ANY COMPANY."

function capitalize(str) {
  let array = str.split(" ")
  let newArray = array.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  return newArray.join(" ")
}

function Profile() {
  return (
    <div className="profile-main">
      <div className="top-padding"></div>
      <div className="profile-inner">
        {capitalize(summary)}
      </div>
    </div>
  )
}

export default Profile
