import AddTodo from "./components/AddTodo";
import ReadTodos from "./components/ReadTodos";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <AddTodo/>
      <ReadTodos/>
    </div>
  )
}
