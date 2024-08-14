import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {deleteTodo} from '../features/todo/todoSlice'


export default function ReadTodos() {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch();

  return (
    <div >
        <h1 className="text-5xl m-5 text-center">Todos</h1>
        {todos.map((todo) => (
            <li className="mt-4 flex justify-between text-black items-center px-4 py-2 rounded" key={todo.id}>
                <div className="text-2xl m-5 text-center"> {todo.text}</div>
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    > X </button>
            </li>
            
        ))}
    </div>
    
  )
}
