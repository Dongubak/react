import react, { useState } from 'react';

const Clist = (props) => {
   const {names, setNames} = props;

   const onRemove = (id) => {
      const nextNames = names.filter((e) => {
         return e.id !== id
      });

      setNames(nextNames);
   };

   return(
      names.map((e) => (
         <li key={e.id} onDoubleClick={() => {
            onRemove(e.id);
         }}>{e.text}</li>
      ))
   ); 
};

export default Clist;