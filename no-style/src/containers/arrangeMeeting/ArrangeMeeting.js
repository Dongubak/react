import React from 'react';

const ArrangeMeeting = () => {

   const onClick = () => {
      console.log('다른 학생의 학번 검색');
   }

   return (
      <>
         <h2>미팅시간정하기</h2>
         <input></input>
         
         <button onClick={onClick}>검색</button>
      </>
   )
}

export default ArrangeMeeting;