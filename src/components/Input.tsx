import styles from './Input.module.css';

interface InputProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({value, onChange}: InputProps){

  return (
    <div className={styles.container}>
      <input 
        id='task'
        className={styles.input}
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}