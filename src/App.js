import { useState, useRef } from 'react'
import "./App.css"

function App() {
  const [ todos, settodos ] = useState( [] )
  const inputRef = useRef()
  const addHandler = () =>
  {
    const text = inputRef.current.value
    const newItem = {
      completed: false,
      text
    }
    settodos( [ ...todos, newItem ] )
    inputRef.current.value=""
    
  }
  const liHandler = (index) =>
  {
    const newTodos = [ ...todos ]
    newTodos[ index ].completed = !newTodos[ index ].completed
    settodos( newTodos )
    console.log(todos)
    
  }
  const deleteHandler = (index) =>
  {
    const newTodos = [ ...todos ]
    newTodos.splice( index, 1 )
    settodos(newTodos)
  }
  
  return (
    <div className='app'>
      <div className='to-do-container'>
        <h2>To Do List</h2>
      
      <input ref={inputRef} placeholder='Enter Item'/>
      <button onClick={addHandler}>Add</button>
      <ul>
          {todos.map( ({text,completed },index) =>
          {
            return <div className='item'>
              <li className={completed ? "done" : ""}
                key={index}
                onClick={() => liHandler( index )}>{text}</li>
              <span className='delete' onClick={()=>deleteHandler(index)}>X</span>
            </div> 
          })}
          

      </ul>

      </div>
      
    </div>
  )
}

export default App