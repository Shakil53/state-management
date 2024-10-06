import { useReducer } from "react";

const initialState = {
    name: '',
    age: '',
    hobbies: '',
}

const reduser = (currentState, action) => {

    switch (action.type1) {
        case 'addName':
            return { ...currentState, name: 'shakil'}
    }
}

const UseReduserFun = () => {


    const [state, dispatch] = useReducer(reduser, initialState);
    console.log(state);
    return (
        <form>
            
            <input
                onChange={() => dispatch({type1: 'addName'})}
                className="p-2 border ml-20 mt-20 rounded "
                type="text"
                name="name"
                id="name"
                placeholder="name"
            >
            </input>
            
            <input
                className="p-2 border ml-20 mt-20 rounded "
                type="number"
                name="age"
                placeholder="age"
            ></input>
        </form>
    );
};

export default UseReduserFun;