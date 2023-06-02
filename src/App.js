
import './App.css';
import {useState} from 'react'
import Tarefas from './components/Tarefas';
import AdicionarTarefa from './components/AdicionarTarefa';

function App() {

  //Tarefas iniciadas
  const[tarefas, setTarefas] = useState([
    {
      id: 1,
      text:'Estudar Programação',
      isCompleted: false,
    },
    {
      id:2,
      text: 'Ir para a academia',
      isCompleted: false,
    },
  ]);

  //Adicionar tarefa
  const addTarefa = (text) =>{
    const novasTarefas = [...tarefas, {
      id: Math.floor(Math.random() * 10000),
      text,
      isCompleted: false,
    }]
    setTarefas(novasTarefas)
  }

  //Complete Tarefa
  const completeTarefa =(id)=>{
    const novasTarefas=[...tarefas]
    novasTarefas.map((tarefa) => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa)
    setTarefas(novasTarefas)
  }

  //Remove tarefa
  const removeTarefa=(id)=>{
    const novasTarefas =[...tarefas]
    const filtroTarefas = novasTarefas.filter((tarefa) => tarefa.id !== id ? tarefa : null)
    setTarefas(filtroTarefas)
  }

  return (
    <div className= "App">
      <h1>Todo List!</h1>
      <div className="bloco_principal">
      <h2>Minha lista de tarefas:</h2>
      {tarefas.map((tarefa) => (
        <Tarefas key={tarefa.id} tarefa={tarefa} completeTarefa={completeTarefa} removeTarefa={removeTarefa}/>
      ))}   
      <AdicionarTarefa addTarefa={addTarefa}/>
      </div>
    </div>
  );
}

export default App;
