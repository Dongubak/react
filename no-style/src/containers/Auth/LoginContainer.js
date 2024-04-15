import React, { useCallback, useEffect } from 'react';
import {useState} from 'react';
import { authService } from '../../fbInstance'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../modules/login';
import Login from '../../components/Auth/Login';




const LoginContainer = () => {
   const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
   });
   const navigator = useNavigate();
   const dispatch = useDispatch();

   const onChange = useCallback((e) => {
    setLoginInfo((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
   }, []);

  //  const fetchTest = async () => {
  //   const response = await fetch('http://localhost:3001/login', {
  //         method: 'GET',
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //  }

  //  useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) 
  //       navigator('/');
  //   });

  //   fetchTest();
  // }, [dispatch, navigator]);

  const onSignIn = useCallback(() => {
    navigator('/signIn', {replace: true});
  }, []);

  const onLogin = useCallback(() => {
    dispatch(startLogin(loginInfo));
  }, [loginInfo]);

   return (
    <Login onChange={onChange} onLogin={onLogin} onSignIn={onSignIn}></Login>
   )
}

export default LoginContainer;