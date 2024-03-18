import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css';

const TodoList = ({ todos, onRemove, onToggle }) => {
   console.log(todos);
   return(
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}
            onToggle={onToggle}></TodoListItem>
         ))}
      </div>
   )
}
// 서식1 5
// 서식2 6
// 서식3 7
// 별첨 15
export default React.memo(TodoList);