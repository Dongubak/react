import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainMenuPage = ({isLoggedIn}) => {
   console.log(isLoggedIn);
   const navigate = useNavigate();

   const onEditpage = () => {
      navigate('/edittimetablepage');
   }

   const onGetmeeting = () => {
      navigate('/getmeetingpage');
   }

   if(!isLoggedIn) {
      navigate('login', {
         replace: false,
      })
   }

   return (
      <MainMenuPageWrapper>
         <StyledHeader>
            <h2>메뉴고르기</h2>
         </StyledHeader>
         <ButtonWrapper>
            <StyledButton onClick={onEditpage}>
               시간표 등록하기
            </StyledButton>
            <StyledButton onClick={onGetmeeting}>
               미팅 시간 정하기
            </StyledButton>
         </ButtonWrapper>              
      </MainMenuPageWrapper>
   )
};

const StyledHeader = styled.div`
   margin: 30px;

   padding-bottom: 50px;
`;

const StyledButton = styled.button`
   width: 300px;
   height: 300px;

   & + & {
      margin-left: 10px;
   }

   border: none;
   border-radius: 5px;

   font-size: 30px;
   color: #fff;
   background: linear-gradient(45deg, #4affff, #35e0f7);

   &:hover {
      background: linear-gradient(55deg, #ffffff, #35e0f7);
   }
`


const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px auto;

`

const MainMenuPageWrapper = styled.div`
   width: 1000px;
   height: 80vh;
   padding: 30px;
   
   background-color: #fff;
   margin: 50px auto;
   box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
`


export default MainMenuPage;