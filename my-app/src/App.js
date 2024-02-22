
import './App.css';
import react, { useState } from 'react';
import MyComponent from './MyComponent';
function App() {
  const [profile, setProfile] = useState(
    {
      username: '',
      age:'',
    }
  );

  const onChangeUserName = (e) => {
    setProfile({
      ...profile,
      [e.target.name] : e.target.value
    });
  };

  const onChangeAge = (e) => {
    setProfile({
      ...profile,
      [e.target.name] : e.target.value
    });
  };

  const onClick = () => {
    alert(`username : ${profile.username} 
    age : ${profile.age}`);
    setProfile({
      username: '',
      age: ''
    });
  }

  return(
    <div>
      <h2>dddd</h2>
      <div>
        <input name='username' type='text'
        onChange={onChangeUserName}
        value={profile.username}
        ></input>
        <input name='age' type='text'
        onChange={onChangeAge}
        value={profile.age}
        ></input>
      </div> 
      <div>
        <button onClick={onClick}>submit</button>
      </div> 
    </div>
  )
}

export default App;
