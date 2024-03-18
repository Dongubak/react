import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter((todo) => (
        todo.id !== action.id
      ));

    case 'TOGGLE':
      return todos.map((todo) => (
        todo.id === action.id ? {
          ...todo,
          checked: !todo.checked
        } : todo
      ));
    defualt:
      return todos;
  }

}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [{
    id: 1,
    text: 'HI',
    checked: false
  }]);

  const nextId = useRef(2);

  const onInsert = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text: text,
      checked: false,
    };

    dispatch({
      type: 'INSERT',
      newTodo
    });

    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE',
      id: id
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE',
      id: id
    })
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
