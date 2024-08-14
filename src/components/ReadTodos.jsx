import { useSelector } from 'react-redux'

export default function ReadTodos() {

    const todos = useSelector(state => state.todos)
   // console.log(todos)

  return (
    <div >
        <h1 className="text-5xl m-5 text-center">Todos</h1>
        {todos.map((todo) => (
            <li className="text-2xl m-5 text-center" key={todo.id}>{todo.text}</li>
        ))}
    </div>
    
  )
}
