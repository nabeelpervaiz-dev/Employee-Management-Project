import React from 'react'
import Nav from './EmployeDashboardComponents/Nav'
import TaskCreationForm from './AdminComponents/TaskCreationForm'
import AlLCreatedTasks from './AdminComponents/AlLCreatedTasks'

const AdminDashboard = (props) => {
  return (
    <div>
        <Nav info={props.info}/>
        <TaskCreationForm/>
    </div>
  )
}

export default AdminDashboard