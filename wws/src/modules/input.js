import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = 'input/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

const initialState = {
   id: '',
   pw: '',
}

const input = handleActions({
   [CHANGE_INPUT]: (state, {payload: input}) => ({
      ...state,
      [input.type] : input.value,
   })
}, initialState);

export default input;