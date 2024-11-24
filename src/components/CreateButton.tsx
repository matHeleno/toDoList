import { PlusCircle } from "phosphor-react";
import styles from "./CreateButton.module.css"
import React from "react";

interface CreateButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function CreateButton({onClick}: CreateButtonProps) {
  return(

    <button 
      title="Criar nova tarefa"
      type="button" 
      className={styles.createButton} 
      onClick={onClick}
    >
      <PlusCircle size={16} /> Criar
    </button>

  )
}