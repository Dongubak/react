import React from "react";
import styled from "styled-components";

const EditTimeTablePage = () => {
   return(
      <EditTimeTablePageWrapper>
         <StyledHeader>
            <h2>
               시간표 등록하기
            </h2>
         </StyledHeader>
         <StyledContent>
            <FormWrapper>
               <input></input>
               <select>
                  <option>1</option>
               </select>

               <button>search</button>
            </FormWrapper>
            <TimeTableWrapper>
               
            </TimeTableWrapper>
         </StyledContent>
      </EditTimeTablePageWrapper>
   )
}

const StyledHeader = styled.div`
   border: 1px solid black;
   margin: 30px;
`

const StyledContent = styled.div`
   border: 1px solid black;
   height: 50vh;
   display: flex;
`;


const FormWrapper = styled.form`
   border: 1px solid black;
   flex: 1;
   background: green;
   display: flex;
   justify-content: center;
   align-items: center;

`

const TimeTableWrapper = styled.div`
   border: 1px solid black;
   flex: 1;
   background: pink;
`

const EditTimeTablePageWrapper = styled.div`
   width: 1000px;
   height: 80vh;
   padding: 30px;
   
   background-color: #fff;
   margin: 50px auto;
   box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
`;

export default EditTimeTablePage;