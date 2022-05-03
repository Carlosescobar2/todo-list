import { timingSafeEqual } from 'crypto'
import React from 'react'
import { ITask } from '../Interfaces'

interface Props { 
    task: ITask,

}
const TodoList = ({task}: Props) => {
  return (
      <div className='Task'>
          <div className='content'>
              <span>{task.taskName}</span>
              <span>{task.deadline}</span>

          </div>
          <button>x</button>

      </div>
  )
}

export default TodoList