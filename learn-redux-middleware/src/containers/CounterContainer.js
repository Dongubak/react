import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, decreaseAsync, increase, increaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
   const  number  = useSelector(state => {
      const number = state.number;
      return number;
   });

   const dispatch = useDispatch();

   const onIncreaseAsync = useCallback(() => {
      dispatch(increaseAsync());
   }, [dispatch]);

   const onDecreaseAsync = useCallback(() => {
      dispatch(decreaseAsync());
   }, [dispatch]);

   return(
      <Counter number={number} onIncrease={onIncreaseAsync} onDecrease={onDecreaseAsync}></Counter>
   )

}

export default CounterContainer;