import React from 'react'
import TaskCard from './TaskCard'
import AcceptTask from '../../Tasks/AcceptTask';
import CompleteTask from '../../Tasks/CompleteTask';
import DeleteTask from '../../Tasks/DeleteTask';
import FailTask from '../../Tasks/FailTask';

const TaskDetailsCard = (props) => {
  const TaskDetails=props.data.tasks;
  console.log(TaskDetails)
  return (
    <div id='TaskCard_Container' className='w-full px-7 sm:pb-14 pb-14 pt-6 sm:pt-4  h-90 sm:h-80 flex flex-nowrap gap-3 overflow-x-auto'>
       {/* {TaskDetails.map((elem,idx)=>{
        return <TaskCard title={elem.taskTitle} discription={elem.taskDescription} date={elem.taskDate}/>
       })} */}
     
     {
      TaskDetails.map((elem)=>{
        if(elem.active){
          return < AcceptTask title={elem.taskTitle} discription={elem.taskDescription} date={elem.taskDate}  category={elem.category} />
        }
         if(elem.newTask){
         return <DeleteTask title={elem.taskTitle} discription={elem.taskDescription} date={elem.taskDate}  category={elem.category} />
        }
         if(elem.failed){
          return <FailTask title={elem.taskTitle} discription={elem.taskDescription} date={elem.taskDate}  category={elem.category}/>
        }
         if(elem.completed){
          return <CompleteTask title={elem.taskTitle} discription={elem.taskDescription} date={elem.taskDate}  category={elem.category}/>
        }
         
      })
     }

    </div>
  )
}

export default TaskDetailsCard
