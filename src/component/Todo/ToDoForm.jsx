import { useContext } from "react";
import { TodoContext } from "../../context/ToDoProvider";

const ToDoForm = () => {
    const { ToDoTitle } = useContext(TodoContext)
    console.log(ToDoTitle);
    return (
        <div>
            
        </div>
    );
};

export default ToDoForm;