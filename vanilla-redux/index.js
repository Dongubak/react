import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');


const TOGGLE_SWTICH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => (
   {type: TOGGLE_SWTICH}
);

const increase = (difference) => ({
      type: INCREASE,
      difference
});

const decrease = () => ({
   type: DECREASE,
});

const initialState = {
   toggle: false,
   counter: 0,
};

function reducer(state = initialState, action) {
   switch(action.type) {
      case INCREASE:
         return({
            ...state,
            counter: state.counter + 1,
         })
      case DECREASE:
         return({
            ...state,
            counter : state.counter - 1,
         })

      case TOGGLE_SWTICH:
         return({
            ...state,
            toggle: !state.toggle
         });

      default:
         return state;
   }
}


const store = createStore(reducer);

const render = () => {
   const state = store.getState();

   if(state.toggle) {
      divToggle.classList.add('active');
   } else {
      divToggle.classList.remove('active');
   }

   counter.innerText = state.counter;
}


const listener = () => {
   console.log('상태가 업데이트 됨');
}

const unsubscribe = store.subscribe(listener);
unsubscribe();


render();
state.subscribe(render);

divToggle.onClick = () => {
   store.dispatch(toggleSwitch());
}

btnIncrease.onClick = () => {
   store.dispatch(increase(1));
}

btnDecrease.onClick = () => {
   store.dispatch(decrease());
}