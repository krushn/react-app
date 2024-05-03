import React, { createContext, useReducer } from "react";

const initialState = {
    isLoggedIn: window.localStorage.getItem('token') || false
}

let reducer = (state, action) => {

    switch (action.type) {

        case "SET_STATE": {
            let a = { ...state, ...action.data };
            return a; 
        }

        case 'LOGOUT': {

            window.localStorage.removeItem("token");

            return { ...state, isLoggedIn: false }; 
        }

        case "SET_TOKEN": {

            console.log(action,state);

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

export const loggedIn = (data) => ({
    data: data,
    type: 'SET_TOKEN', 
});
