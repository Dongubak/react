import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { authService, db } from '../../fbInstance';
import { useNavigate } from 'react-router';
import { collection, doc, setDoc } from 'firebase/firestore';
import Signin from '../../components/Auth/Signin';


function SigninContainer() {
   const [signinInfo, setSigninInfo] = useState({
      email: '',
      password: '',
      password2: '',
      displayName: '',
   });

   const onChange = useCallback((e) => {
      setSigninInfo((state) => ({
         ...state,
         [e.target.name]: e.target.value
      }))
   }, []);

   const navigator = useNavigate();

   const onClick = async () => {
      const {email, password, password2, displayName} = signinInfo;
      let data;
      if(password !== password2) {
         alert('비밀번호 두개가 다름');
         return;
      } else {
         try {
            console.log(email, password, password2);
            data = await createUserWithEmailAndPassword(authService, email, password);
            
            const userDocRef = doc(collection(db, 'user'), data.user.uid);
            setDoc(userDocRef, {displayName: displayName, table: []});
         } catch(e) {
            if(e.code === 'auth/invalid-email') {
               alert('이미 존재하는 이메일이거나 이메일 형식이 아닙니다');
            }
         }
      }
   }

   const onGoBack = useCallback(() => {
      navigator('/login', {replace: true})
   }, []);
 
   return (
      <Signin onChange={onChange} onGoBack={onGoBack} onClick={onClick}></Signin>
   )
}

export default SigninContainer;