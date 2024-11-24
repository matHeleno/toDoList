import { ChangeEvent } from 'react';
import { DeleteButton } from './DeleteButton'
import styles from './Task.module.css'

interface TaskProps {
  content: string,
  onDeleteTask: (deletedTask: string) => void,
  onToggleTask: (isChecked: boolean) => void
}

export function Task({content, onDeleteTask, onToggleTask}: TaskProps) {


  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleToggleTask(event: ChangeEvent<HTMLInputElement>) {
    onToggleTask(event.target.checked); 
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" id="example" onChange={handleToggleTask}/>
      <label htmlFor="example">{content}</label>
      <DeleteButton onClick={handleDeleteTask}/>
    </div>
  )
}