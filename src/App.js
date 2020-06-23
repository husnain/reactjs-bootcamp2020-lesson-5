import React, {useState} from 'react';
import { Parent } from './Parent';
import './App.css';
import counterContext from './CounterContext';

function App() {
  let countState = useState(1)
  // let [count, setCount] = useState(1)
  return (
  <counterContext.Provider value={countState}>
    <div className="App">
      <Parent name="Husnain"/>
    </div>
  </counterContext.Provider>
  );
}

export default App;
