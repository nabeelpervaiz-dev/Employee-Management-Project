import React from 'react'
import Nav from './EmployeDashboardComponents/Nav'
import TaskCreationForm from './AdminComponents/TaskCreationForm'
import AlLCreatedTasks from './AdminComponents/AlLCreatedTasks'

const AdminDashboard = () => {
  return (
    <div>
        <Nav/>
        <TaskCreationForm/>
    </div>
  )
}

export default AdminDashboard