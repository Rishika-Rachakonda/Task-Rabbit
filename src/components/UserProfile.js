import React from 'react'
import './UserProfile.css'

function UserProfile() {
  return (
    <div className='user-pro'>
      <div className='usr-photo'>
        <img src='https://i.pinimg.com/474x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg'></img>
      </div>
      <div className='usr-details'>
        <h4>Name : User1</h4>
        <h4>Age : 00 </h4>
        <h4>Interests : interst1, interest2, interst3</h4>
        <h4>Hobbies : Hobby1, hobby2, hobby3</h4>
      </div>

      <div className='usr-task'> 
        <h4>All tasks : 7</h4>
        <h4>Task Pending : 2 </h4>
        <h4>Task completeld : 5</h4>
      </div>

    </div>
  )
}

export default UserProfile
