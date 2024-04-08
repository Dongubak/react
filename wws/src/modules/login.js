import React from "react";
import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';

export const login_ = createAction(LOGIN, (id, pw) => ({
   id, pw,
}));

export const logout_ = (LOGOUT);

const initialState = {
   isLoggedIn: false,
   id: '',
};

const login = handleActions({
   [LOGIN]: (state, {payload}) => ({
      ...state,
      id: payload.id,
      pw: payload.pw,
      isLoggedIn: true
   }),

   [LOGOUT]: (state) => ({
      ...state,
      id: '',
      pw: '',
      isLoggedIn: false,
   }),
}, initialState);

export default login;