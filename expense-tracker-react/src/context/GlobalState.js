import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
// Initial state
// initialState: This is our "notebook."
// It has all the records (transactions) written in it.

const initialState = {
    transactions: [
        { id: 12, text: 'House at Agungi', amount: -100000 },
        { id: 21, text: 'Payment from New York Client', amount: 1000000 },
        { id: 31, text: 'Vacation in Monaco and Oslo', amount: -50000 },
        { id: 43, text: 'Monthly renumeration', amount: 900000 }
    ]
}

// create context
// createContext: This is like creating a magic box where we put the notebook.
// Anyone who works in the store can open the magic box and see the records.
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}