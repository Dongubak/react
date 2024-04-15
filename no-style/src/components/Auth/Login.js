import styled from 'styled-components';

const LoginBlock = styled.div`
  .form {
    display: flex;
    padding: 30px;
    flex-direction: column;
  }

  .login:active,
  .login:focus,
  .login:hover {
    outline: none;
    border-bottom-color: rgb(68, 112, 67);
  }

  .login {
    border: none;
    border-bottom: 2px solid #D1D1D4;
    background: none;
    padding: 10px;
    font-weight: 700;
    transition: .2s;
    width: 75%;
  }
    .btn {
      border: none;
      width: 75%;
      background-color: rgb(68, 112, 67);
      color: white;
      padding: 15px 0;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: .2s;
    }
    .btn:hover {
      background-color: rgb(49, 82, 48);
    }
    .background {
      width: 60vw;
      background-color: white;
      height: auto;
      width: 90%;
      max-width: 450px;
      padding: 10px;
      margin: 0 auto;
      border-radius: 5px;
      box-shadow: 0px 40px 30px -20px rgba(0, 0, 0, 0.3);
      text-align: center;
    }
`

const Login = ({onSignIn, onLogin, onChange}) => {
   return(
    <LoginBlock>
      <div className="background">
        <h2>로그인</h2>
 
        <div className="form">
          <p><input className="login" type="text" name="email" placeholder="아이디" onChange={onChange} /></p>
          <p><input className="login" type="password" name="password" placeholder="비밀번호" onChange={onChange} /></p>

          <p><input className="btn" type="submit" value="로그인" onClick={onLogin} /></p>
        </div>

        <p>계정이 없으신가요?  <button onClick={onSignIn}>회원가입</button></p>
      </div>
    </LoginBlock>
   )
}

export default Login;