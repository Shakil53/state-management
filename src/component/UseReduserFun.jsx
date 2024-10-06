import { useReducer } from "react";

const initialState = {
    name: '',
    age: '',
    hobbies: '',
}

const reduser = (currentState, action) => {

    switch (action.type1) {
        case 'addName':
            return { ...currentState, name: action.payload }
        case 'addAge':
            return { ...currentState, age: action.payload }
        case 'addHobies':
            return { ...currentState, hobbies:[...currentState.hobbies,action.payload]  }
        default:
            return currentState;
    }
}

const UseReduserFun = () => {

    const [state, dispatch] = useReducer(reduser, initialState);
    console.log(state);

    const handSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }
    return (
        <form onClick={handSubmit}>
            
            <input
                onChange={(e) => dispatch({type1: 'addName', payload: e.target.value})}
                className="p-2 border ml-20 mt-20 rounded "
                type="text"
                name="name"
                id="name"
                placeholder="name"
            >
            </input>
            
            <input
                 onChange={(e) => dispatch({type1: 'addAge', payload: e.target.value})}
                className="p-2 border ml-20 mt-20 rounded "
                type="number"
                name="age"
                placeholder="age"
            ></input>
            <input
                 onBlur={(e) => dispatch({type1: 'addHobies', payload: e.target.value})}
                className="p-2 border ml-20 mt-20 rounded "
                type="hobbies"
                name="hobbies"
                placeholder="hobbies"
            ></input>
            <button className="text-white border p-2 ml-10 rounded bg-slate-400">Submit</button>
        </form>
    );
};

export default UseReduserFun;