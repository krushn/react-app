import React, { createContext, useReducer } from "react";

const tasks = window.localStorage.getItem('tasks');

const initialState = {
    isLoggedIn: window.localStorage.getItem('token') || false,
    tasks:  tasks? JSON.parse(tasks) : []
}
 
const reducer = (state, action) => {

    switch (action.type) {

        case "SET_STATE": {
            let a = { ...state, ...action.data };
            return a; 
        }

        case "MARK_DONE_TASK": {
            state.tasks[action.data['index']].status = 1;
            window.localStorage.setItem('tasks', JSON.stringify(state.tasks))
           return { ...state };
        }

        case "MARK_UNDONE_TASK": {
            state.tasks[action.data['index']].status = 0;
            window.localStorage.setItem('tasks', JSON.stringify(state.tasks))
            return { ...state };
        }

        case "REMOVE_TASK": {
            //state.tasks.splice(action.data['index'], 1); 
            state.tasks = state.tasks.filter((_, i) => i != action.data['index'])
            window.localStorage.setItem('tasks', JSON.stringify(state.tasks))
            return {
                ...state
            }; 
        }

        case "ADD_TASK": {
            state.tasks.push(action.data); 
            window.localStorage.setItem('tasks', JSON.stringify(state.tasks))
            return state; 
        }

        case 'LOGOUT': {

            window.localStorage.removeItem("token");

            return { ...state, isLoggedIn: false }; 
        }

        case "SET_TOKEN": {
 
            window.localStorage.setItem("token", action.data.token);

            return {
                ...state,
                isLoggedIn: true
            };
        }

        default: {
            return state;
        }
    }
};

let AppContext = createContext(null);

function AppContextProvider(props) {

    let [state, dispatch] = useReducer(reducer, initialState);

    let value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const logout = () => ({
    type: 'LOGOUT'
});

export const setState = (data) => ({
    data: data,
    type: 'SET_STATE'
});

export const markDoneTask = (data) => ({
    data: data,
    type: 'MARK_DONE_TASK'
});

export const markUnDoneTask = (data) => ({
    data: data,
    type: 'MARK_UNDONE_TASK'
});

export const removeTask = (data) => ({
    data: data,
    type: 'REMOVE_TASK'
});

export const addTask = (data) => ({
    data: data,
    type: 'ADD_TASK'
});

export const loggedIn = (data) => ({
    data: data,
    type: 'SET_TOKEN', 
});

 