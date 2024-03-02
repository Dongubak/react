import React, { useReducer } from "react";

function reducer(state, action) {
   if(action.name === 'INCREMENT') {
      return {
         ...state,
         count: state.count + 1
      };
   } else if(action.name === 'DECREMENT') {
      return {
         ...state,
         count: state.count - 1
      };
   }
}

export default function useCounter(initialForm) {
   const [state, dispatch] = useReducer(reducer, initialForm);

   const onClick = (e) => {
      dispatch(e.target);
   }

   return [state, onClick];
}