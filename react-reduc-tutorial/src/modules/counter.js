import {createAction, handleActions} from 'redux-actions';

///definition of actions

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

///definition of action creator
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

///create initial state
const initialState = {
   number: 0
};

///create reducer function

const counter = handleActions(
   {
      [INCREASE]: (state, action) => ({
         number: state.number + 1
      }),
      [DECREASE]: (state, action) => ({
         number: state.number - 1
      })
   },
   initialState
);

// function counter(state = initialState, action) {
//    switch(action.type) {
//       case INCREASE:
//          return({
//             number: state.number + 1
//          });

//       case DECREASE:
//          return({
//             number: state.number - 1
//          });

//       default:
//          return({
//             ...state
//          })
//    }
// }

export default counter;