import React from "react";

const TodoItem = ({todo, onToggle, onRemove}) => {
   return (
      <div>
         <input type="checkbox" onClick={() => {
            onToggle(todo.id)
         }} checked={todo.done} readOnly={true}></input>
         <span style={{
            textDecoration: todo.done ? 'line-through' : 'none'
         }}>{todo.text}</span>
         <button onClick={() => {
            onRemove(todo.id)
         }}>삭제</button>
      </div>
   )
}

const Todos = ({
   input,
   todos,
   onChangeinput,
   onInsert,
   onToggle,
   onRemove
}) => {
   const onSubmit = e => {
      e.preventDefault();
      onInsert(input);
      onChangeinput('');
   }

   const onChange = e => {
      onChangeinput(e.target.value);
   }

   return(
      <div>
         <form onSubmit={onSubmit}>
            <input value={input} onChange={onChange}></input>
            <button type="submit">등록</button>
         </form>
         <div>
            {
               todos.map(todo => (
                  <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove}></TodoItem>
               ))
            }
         </div>
      </div>
   )
}

export default Todos;