import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Counter></Counter>


      </header>
    </div>
  );
}



const Counter = () =>{

  const [count, setCount] = useState(0);

  return(
    <div>
      <h1 style={{border: '1px solid tomato', borderRadius: '20px', padding: '20px'}}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App;
