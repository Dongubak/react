import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

///increase 와 decrease는 액션생성함수이다.

// export const increaseAsync = function() {
//    return function(dispatch) {
//       setTimeout(() => {
//          dispatch(increase());
//       }, 1000);
//    }
// }

// export const decreaseAsync = function() {
//    return function(dispatch) {
//       setTimeout(() => {
//          dispatch(decrease());
//       }, 1000);
//    }
// }

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
   yield delay(1000);
   yield put(increase());
}

function* decreaseSaga() {
   yield delay(1000);
   yield put(decrease());
}

export function* counterSaga() {
   yield takeEvery(INCREASE_ASYNC, increaseSaga);
   yield takeLatest(DECREASE_ASYNC, decreaseSaga);
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