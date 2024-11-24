import { Trash } from "phosphor-react";
import styles from "./DeleteButton.module.css"

interface DeleteButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function DeleteButton({onClick}: DeleteButtonProps) {
  return (
    <button className={styles.deleteButton} onClick={onClick}>
      <Trash />
    </button>
  )
}