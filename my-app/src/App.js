
import './App.css';
import react, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import useInput from './useInput';

function App() {
  const [state, onChange] = useInput({
    name: '',
    age: '',
  });

  const {name, age} = state;

  return(
    <div>
      <input name='name' value={name} onChange={onChange}></input>
      <input name='age' value={age} onChange={onChange}></input>

      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    </div>
  )
}

export default App;
