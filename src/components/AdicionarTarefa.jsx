import { useState } from 'react'
import styles from './AdicionarTarefa.module.css'


const AdicionarTarefa = ({addTarefa}) => {

    const [text, setText] =  useState('')

    const enviarTarefa = (e) =>{
        e.preventDefault();
        if(!text) return;
        addTarefa(text)
        setText('')
    }

  return (
    <div className={styles.container_add}>
        <form onSubmit={enviarTarefa}>
            <h3>Adicionar tarefa:</h3>
            <input type="text" placeholder='Adicione uma tarefa' value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
}

export default AdicionarTarefa