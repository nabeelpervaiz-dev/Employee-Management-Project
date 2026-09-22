import React from 'react'
import Nav from './EmployeDashboardComponents/Nav'
import TaskCounts from './EmployeDashboardComponents/TaskCounts'
import TaskDetailsCard from './EmployeDashboardComponents/TaskDetailsCard'

const EmployeeDashboard = () => {
  return (
    <div className='bg-white'>
        <Nav/>
        <TaskCounts/>
        <TaskDetailsCard/>
    </div>
  )
}

export default EmployeeDashboard