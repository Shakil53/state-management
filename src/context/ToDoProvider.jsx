import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

const reduser = (currentState, action) => {
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload]
        default:
            return currentState;
            
    }
}

const ToDoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, initialState)
    const values = {
        state,
        dispatch,
    }
    return (
        <TodoContext.Provider value={values}>{children}
            
        </TodoContext.Provider>
    );
};

export default ToDoProvider;