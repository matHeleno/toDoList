import './global.css'

import styles from './App.module.css'

import { Input } from './components/Input'
import { Task } from './components/Task'
import { CreateButton } from './components/CreateButton'
import { Header } from './components/Header'
import { useState } from 'react'

import { Notepad } from 'phosphor-react'


function App() {


  const [countTasks, setCountTask] = useState(0)

  const [countTasksDone, setCountTasksDone] = useState(0)

  const [tasks, setTasks] = useState<string[]>([]);

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setCountTask((state) => state + 1)
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function taskDelete(deletedTask: string) {
      const tasksWithoutDeletedOne = tasks.filter(task => {
       return task !== deletedTask
      })
   
      setCountTask((state) => state - 1)
      setTasks(tasksWithoutDeletedOne)
  }

  function handleCountTasksDone(isChecked: boolean) {
    setCountTasksDone((state) => (isChecked ? state + 1 : state - 1));
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <Input value={newTask} onChange={handleNewTaskChange} />
          <CreateButton onClick={handleCreateNewTask} />
        </form>
        <div className={styles.task}>
          <p className={styles.taskCreated}>Tarefas criadas <span className={styles.count}>{countTasks}</span></p>
          <p className={styles.taskDone}>Concluídas <span className={styles.count}>{countTasksDone} de {countTasks}</span></p>
        </div>

        {tasks.length <= 0 ? (
          <div className={styles.taskContainer}>
            <Notepad size={56} color='gray' />
            <p>
              Você ainda não tem tarefas cadastradas
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
          ) : (
            <div>
              {
                tasks.map(task => {
                  return <Task key={task} content={task} onDeleteTask={taskDelete} onToggleTask={handleCountTasksDone}/>
                })
              }
            </div>
          )
        }

      </div>
    </>
  )
}

export default App
