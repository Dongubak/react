import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
   START_LOADING,
   function(requestType) {
      return requestType;
   }
)

///액션생성함수 호출하면 매개변수를 페이로드에 담는다?

export const finishLoading = createAction(
   FINISH_LOADING,
   function(requestType) {
      return requestType;
   }
)

const initialState = {};

const loading = handleActions({
   [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true
   }),
   [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
   })
}, initialState)

export default loading;