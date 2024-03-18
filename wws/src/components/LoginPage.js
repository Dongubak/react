import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
   const isLoggedIn = true;

   const navigate = useNavigate();
   const onLogin = () => {
      navigate("/");
   }

   if(isLoggedIn) {
      navigate("/");
   }

   return (
      <LoginPageWrapper>
         <InputForm>
            <h2>언제볼까</h2>
            <input></input>
            <input></input>

            <button onClick={onLogin}>Login</button>
         </InputForm>
         <FooterWrapper>
            <p2>가입</p2>
         </FooterWrapper>
         

      </LoginPageWrapper>
   )
}


const LoginPageWrapper = styled.div`
   width: 500px;
   padding: 30px;
   
   background-color: #fff;
   margin: 50px auto;
   box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
`;

const InputForm = styled.form`
   width: 80%;

   margin: 0 auto;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   input {
      width: 100%;
      height: 30px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      & + input {
         margin-top: 10px;
      }
   }
   /* @font-face {
      font-family: "BMEULJIROTTF";
      src: url("src/font/ttf/BMEULJIROTTF.ttf");
      } */
   button {
      width: 100%;
      height: 28px;
      margin-top: 10px;

      border-radius: 3px;
      border: none;

      font-size : 15px;
      font-family: Arial, Helvetica, sans-serif;
      color: #fff;
      
      background: linear-gradient(45deg, #4affff, #35e0f7);
   }
`

const FooterWrapper = styled.div`
   margin: 10px 10px auto;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export default LoginPage;