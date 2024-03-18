import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';


const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  )
}

export default App;
