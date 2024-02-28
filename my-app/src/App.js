
import './App.css';
import react, { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeAge = (e) => {
    setAge(e.target.value);
  }

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      age
    })

    return () => {
      console.log('clean up');
      console.log(name);
    }
  });

  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(age);

    return () => {
      console.log('clean up');
    }
  }, [age]);

  return(
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName}></input>
        <input type="text" value={age} onChange={onChangeAge}></input>
      </div>

      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    </div>
  )
}

export default App;
