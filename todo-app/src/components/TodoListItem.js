import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";

import { MdRemoveCircleOutline } from "react-icons/md";
import './TodoListItem.css';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
   const {text, checked, id} = todo;
   const MINSU = false;
   return (
      <div className="TodoListItem">
         <div className={cn('checkbox', {checked}, {MINSU})}
            onClick={() => {
               onToggle(id);
            }}
         >
            {checked ? <IoCheckboxOutline /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>

         <div className="remove" onClick={() => {
            onRemove(id);
         }}>
            <MdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default React.memo(TodoListItem);