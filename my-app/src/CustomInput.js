import { useReducer, useState } from "react";

function reducer(state, action) {
   return {
      ...state,
      [action.name] : action.value
   };
} ///action에 name과 value를 받으며 state내부에 name프로퍼티 해당하는 value를 업데이트한다

const CustomInput = () => {

   const [state, dispatch] = useReducer(reducer, {
      name : '',
      age: ''
   });

   const {name, age} = state; ///destructuring
   
   const onChange = (e) => {
      dispatch(e.target);
      ///input tag에서의 e.target은 input tag를 가리키며 이는 name field와 age field를 갖고있음
   }
   
   return (
      <div>
         <div>
            <input name="name" value={name} onChange={onChange}></input>
            <input name="age" value={age} onChange={onChange}></input>
         </div>

         <div>
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
         </div>
      </div>
   )
}

export default CustomInput;