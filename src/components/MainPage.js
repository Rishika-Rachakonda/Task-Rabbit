import React from 'react'
import './MainPage.css'
import TaskList from './TaskList'
import Taskdisplay from './TaskDisplay'

function MainPage() {
  return (
    <div className='main-pg'>
      <TaskList></TaskList>
      <Taskdisplay></Taskdisplay>
    </div>
  )
}

export default MainPage