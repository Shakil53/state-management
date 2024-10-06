import ToDoForm from "./component/Todo/ToDoForm";
import ToDoProvider from "./context/ToDoProvider";


const App = () => {
  
  return (
    <ToDoProvider>
      <div>
        <ToDoForm></ToDoForm>
      </div>
    </ToDoProvider>
  );
};

export default App;