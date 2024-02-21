
import './App.css';
import MyComponent from './MyComponent';
import react, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return(
    <MyComponent count={count} setCount={setCount}>{count}</MyComponent>
  )
}

export default App;
