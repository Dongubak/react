import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

///increase 와 decrease는 액션생성함수이다.

export const increaseAsync = function() {
   return function(dispatch) {
      setTimeout(() => {
         dispatch(increase());
      }, 1000);
   }
}

export const decreaseAsync = function() {
   return function(dispatch) {
      setTimeout(() => {
         dispatch(decrease());
      }, 1000);
   }
}

const initialState = {
   number: 0
};

const counter = handleActions({
   [INCREASE] : state => ({
      number: state.number + 1
   }),
   [DECREASE] : state => ({
      number: state.number - 1
   })
}, initialState);

export default counter;