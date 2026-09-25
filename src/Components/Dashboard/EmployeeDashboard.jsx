import React from 'react'
import Nav from './EmployeDashboardComponents/Nav'
import TaskCounts from './EmployeDashboardComponents/TaskCounts'
import TaskDetailsCard from './EmployeDashboardComponents/TaskDetailsCard'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='bg-white'>
        <Nav info={props.info} data={props.data} />
        <TaskCounts />
        <TaskDetailsCard />
    </div>
  )
}

export default EmployeeDashboard