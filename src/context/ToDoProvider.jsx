import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

const reduser = (currentState, action) => {
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload]
        case 'taskComplete':
            return currentState.map((item) => item.id === action.payload ? {
                ...item, isCompleted: !item.isCompleted}: item);
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