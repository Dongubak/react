import React from "react";
import styled from "styled-components";

const GetMeetingTimePage = () => {
   return (
      <GetMeetingTimePageWrapper>
         <StyledHeader>
            <h2>
               미팅 시간 정하기
            </h2>
         </StyledHeader>
         <StyledContent>
            <FormWrapper></FormWrapper>
            <TimeTableWrapper></TimeTableWrapper>
         </StyledContent>
      </GetMeetingTimePageWrapper>
   )
};

const StyledHeader = styled.div`
   border: 1px solid black;
   margin: 30px;
`

const StyledContent = styled.div`
   border: 1px solid black;
   height: 50vh;
   display: flex;
`;


const GetMeetingTimePageWrapper = styled.div`
   width: 1000px;
   height: 80vh;
   padding: 30px;
   border: 1px solid black;
   background-color: #fff;
   margin: 50px auto;
   box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
   border-radius: 10px;

   display: flex;
   flex-direction: column;
`

const FormWrapper = styled.form`
   border: 1px solid black;
   flex: 1;
   background: green;
   display: flex;
   justify-content: center;
   align-items: center;
`

const TimeTableWrapper = styled.div`
   flex: 1;

   border: 1px solid black;
`;

export default GetMeetingTimePage;