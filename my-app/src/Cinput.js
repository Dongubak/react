import react, { useState } from 'react';

const Cinput = (props) => {
   const {names, setNames} = props;

   const [inputText, setInputText] = useState('');
   const [nextId, setNextId] = useState(5);   

   const onChange = (e) => {
      setInputText(e.target.value);
   };

   const onClick = () => {
      const nextNames = [
         ...names,
         {id: nextId, text: inputText}
      ];

      setNames(nextNames);

      setNextId((s) => s + 1);
      setInputText('');
   }

   return(
      <div>
         <input type="text" value={inputText} onChange={onChange}></input>
         <button onClick={onClick}>+</button>
      </div>
   ); 
};

export default Cinput;