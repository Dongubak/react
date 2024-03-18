///definition of actions

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

///definition of action creator

export const increase = () => {
   return {
      type: INCREASE
   };
}

export const decrease = () => {
   return {
      type: DECREASE
   }
}

///create initial state
const initialState = {
   number: 0
};

///create reducer function

function counter(state = initialState, action) {
   switch(action.type) {
      case INCREASE:
         return({
            number: state.number + 1
         });

      case DECREASE:
         return({
            number: state.number - 1
         });

      default:
         return({
            ...state
         })
   }
}

export default counter;