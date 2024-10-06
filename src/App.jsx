import ToDoForm from "./component/Todo/ToDoForm";
import TodoList from "./component/Todo/TodoList";
import ToDoProvider from "./context/ToDoProvider";


const App = () => {
  
  return (
    <ToDoProvider>
      <div>
        <ToDoForm></ToDoForm>
        <TodoList></TodoList>
      </div>
    </ToDoProvider>
  );
};

export default App;