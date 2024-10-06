import { createContext } from "react";

export const TodoContext = createContext();

const ToDoProvider = ({children}) => {
    const values = {
        ToDoTitle: 'This is a title',
    }
    return (
        <TodoContext.Provider value={values}>{children}
            
        </TodoContext.Provider>
    );
};

export default ToDoProvider;