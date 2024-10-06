import { useContext, useState } from "react";
import { TodoContext } from "../../context/ToDoProvider";

const ToDoForm = () => {
    const { state, dispatch } = useContext(TodoContext)
    const [task, setTask] = useState('');


    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            id: Math.random().toString(36).substring(2, 7),
            title: task,
            isCompleted: false,
        }

        dispatch({type: 'addTodo', payload: todo})
    }

    return (
        <div>
            <h1>Add todo</h1>
            <form onSubmit={handleSubmit}>
                <label>Tasks</label>
                <input onBlur={(e) => setTask(e.target.value)}
                    className="p-2 border ml-4 rounded "
                    type="text" name="name"
                    id="todo" placeholder="name"></input>
                <button className="bg-sky-400 p-2 rounded text-white font-semibold ml-4" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ToDoForm;