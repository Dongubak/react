import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { connect, useDispatch, useSelector } from "react-redux";
import {changeInput, insert, toggle, remove} from '../modules/todos';

const TodosContainer = () => {
   const {todos, input} = useSelector(state => ({
      input: state.todos.input,
      todos: state.todos.todos
   }));
   const dispatch = useDispatch();

   const onChangeinput = useCallback((input) => {
      dispatch(changeInput(input))
   }, [dispatch]);

   const onInsert = useCallback((text) => {
      dispatch(insert(text))
   }, [dispatch]);

   const onToggle = useCallback((id) => {
      dispatch(toggle(id));
   }, [dispatch]);

   const onRemove = useCallback((id) => {
      dispatch(remove(id));
   },[dispatch]);

   return (
      <Todos
      input={input}
      todos={todos}
      onChangeinput={onChangeinput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      ></Todos>
   )
}


export default TodosContainer;