import React, { useState } from "react";
import { db } from "./firebase/firebaselib";
import { collection } from 'firebase/firestore';

function App() {
  const [data, setData] = useState('');


  const onClick = async () => {
    const res = await db.collection('lecture').get();
    console.log(res);
  }

  return (
    <div className="App">
      <button onClick={onClick}>fdf</button>    
    </div>
  );
}

export default App;
