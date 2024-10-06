import { useContext } from "react";
import { TodoContext } from "../../context/ToDoProvider";


const TodoList = () => {

    const { state, dispatch } = useContext(TodoContext)
    
    console.log(state);

    return (
        <div>
            {
                state.map((item) => (
                    <p onClick={() => dispatch({ type: 'taskComplete', payload: item.id })} key={item.id} className={`cursor-pointer ${item.isCompleted ? 'line-through': ''}`}> {item.title} </p>
                ))
            }
        </div>
    );
};

export default TodoList;