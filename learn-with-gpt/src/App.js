import React, { createContext, useState, useContext } from 'react';
import './App.css';

// step 1: create a context for a shared data
const UserContext = createContext();

function App() {
  const [ user, setUser] = useState("Alice");

  return (
    // step 2: Provide the context value to children components
    // UserContext.Provider:
    // Provides the value (user) to all components below it in the tree.

    <UserContext.Provider value={user}>
      <h1>Welcome to our app!</h1>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  // STEP 3: cONSUME THE CONTEXT USING 'USEContext'
  const user = useContext(UserContext);
  return <p>User is: {user}</p>
}

export default App;
