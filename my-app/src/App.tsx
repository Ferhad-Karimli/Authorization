import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Login from "./Components/Login"
import { store } from "./store/index"
function App() {
  return (
    <div className="App">
    <Provider store={store}>

    <Login />

    </Provider>

      
    </div>
  );
}

export default App;
