import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { authService } from './firebase/fbInstance';

function Login({setMode}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    try {
      const data = await signInWithEmailAndPassword(authService, email, password);
      console.log(data);

      setMode('Welcome');
    } catch(e) {
      console.log(e);
    }
  }
  
  return <>
    <h2>로그인</h2>

    <div className="form">
      <p><input className="login" type="text" name="username" placeholder="아이디" onChange={event => {
        setEmail(event.target.value);
      }} /></p>
      <p><input className="login" type="password" name="pwd" placeholder="비밀번호" onChange={event => {
        setPassword(event.target.value);
      }} /></p>

      <p><input className="btn" type="submit" value="로그인" onClick={onClick} /></p>
    </div>
  </>
    // <p>계정이 없으신가요?  <button onClick={() => {
    //   props.setMode("SIGNIN");
    // }}>회원가입</button></p> 
}


// function Signin(props) {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");

//   return <>
//     <h2>회원가입</h2>

//     <div className="form">
//       <p><input className="login" type="text" placeholder="아이디" onChange={event => {
//         setId(event.target.value);
//       }} /></p>
//       <p><input className="login" type="password" placeholder="비밀번호" onChange={event => {
//         setPassword(event.target.value);
//       }} /></p>
//       <p><input className="login" type="password" placeholder="비밀번호 확인" onChange={event => {
//         setPassword2(event.target.value);
//       }} /></p>

//       <p><input className="btn" type="submit" value="회원가입" onClick={() => {
//         const userData = {
//           userId: id,
//           userPassword: password,
//           userPassword2: password2,
//         };
//         fetch("http://localhost:3306/signin", { //signin 주소에서 받을 예정
//           method: "post", // method :통신방법
//           headers: {      // headers: API 응답에 대한 정보를 담음
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(userData), //userData라는 객체를 보냄
//         })
//           .then((res) => res.json())
//           .then((json) => {
//             if(json.isSuccess==="True"){
//               alert('회원가입이 완료되었습니다!')
//               props.setMode("LOGIN");
//             }
//             else{
//               alert(json.isSuccess)
//             }
//           });
//       }} /></p>
//     </div>

//     <p>로그인화면으로 돌아가기  <button onClick={() => {
//       props.setMode("LOGIN");
//     }}>로그인</button></p>
//   </> 
// }

function App() {
  const [mode, setMode] = useState("LOGIN");

  let content = null;  

  if(mode==="LOGIN"){
    content = <Login setMode={setMode}></Login> 
  }
  else if (mode === 'SIGNIN') {
    content = <>hello</>
  }
  else if (mode === 'WELCOME') {
    content = <>
    <h2>메인 페이지에 오신 것을 환영합니다</h2>
    <p>로그인에 성공하셨습니다.</p> 
    <a href="/logout">로그아웃</a>   
    </>
  }

  return (
    <>
      <div className="background">
        {content}
      </div>
    </>
  );
}

export default App;