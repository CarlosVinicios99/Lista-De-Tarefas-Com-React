import './App.css'
import {useState, useEffect} from "react"
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000"

function App() {

  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    }

    setTitle("")
    setTime("")
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>Tarefas</h1>
      </div>
      <div className="form-todo">
        <p>Insira sua próxima tarefa</p>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Qual sua tarefa?</label>
            <input type="text" name="title" placeholder="Título da tarefa" 
              onChange={(e) => {setTitle(e.target.value)}}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração: </label>
            <input type="text" name="time" placeholder="Tempo estimado (em horas)" 
              onChange={(e) => {setTime(e.target.value)}}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa"/>
        </form>
      </div>
      <div className="list-todo">
        <h2>Lista De Tarefas:</h2>
        {todos.length === 0 && <p>Nao há tarefas!</p>} 
      </div>
    </div>
  )
}
export default App;
