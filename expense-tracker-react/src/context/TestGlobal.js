import React, { createContext, useReducer, useContext } from "react";

// step 1: Toy box - our starting list of toys
// Toy Box (initialState): This is where we keep all the toys.
const initialState = {
    toys: ["Car", "Doll", "Legos", "Puzzles", "Action-figure", "Pokemon-cards"]
};

// step 2: The helper - It decides what happen when we add or remove toys
// Helper (useReducer): It helps us decide what to do when we want to add or remove a toy.
// It's like asking a grown-up, "Can I add this toy?" or "Can I put this one back?"

function toyReducer(state, action) {
// state: This is like a list of all the toys in the toy box right now.
// action: This is the command we give to the robot helper 
// e.g., "Add this toy!" or "Remove that toy!").

    switch (action.type) {
        case "ADD_TOY":
    // ADD_TOY: This tells the robot to put a new toy in the box.
            return { toys: [...state.toys, action.payload] };

    // The robot looks at the current list of toys
    // (called state.toys) to know what’s inside the box  
        case "REMOVE_TOY":
    // REMOVE_TOY: This tells the robot to take a toy out of the box.
            return { toys: state.toys.filter(toy => toy !== action.payload) };

    // When you give the robot a command, you also give it extra information—like
    // the name of the toy. That’s called the payload.
        default:
            return state;
    }
}