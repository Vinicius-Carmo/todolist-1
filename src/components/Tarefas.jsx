import React from 'react'
import styles from './Tarefas.module.css'

const Tarefas = ({tarefa, completeTarefa, removeTarefa}) => {
  return (
    <div className={styles.bloco_tarefa} style={{ textDecoration: tarefa.isCompleted ? 'line-through' : ''}}>
        <div className={styles.conteudo}>
            <p>{tarefa.text}</p>
        </div>
        <div className={styles.botoes}>
            <button className={styles.completar} onClick={() =>completeTarefa(tarefa.id)}>Completar</button>
            <button className={styles.excluir} onClick={() =>removeTarefa(tarefa.id)}>Excluir</button>
        </div>
    </div>
  )
}

export default Tarefas