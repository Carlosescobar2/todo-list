import React from 'react'
import { ITask } from '../Interfaces'

interface Props { 
    task: ITask,
    completeTask(taskNameToDelete:string): void; 

}
const TodoList = ({task, completeTask}: Props) => {
  return (
      <div className='Task'>
          <div className='content'>
              <span>{task.taskName}</span>
              <span>{task.deadline}</span>

          </div>
          <button onClick={()=> { 
              completeTask(task.taskName)
          }}>x</button>

      </div>
  )
}

export default TodoList