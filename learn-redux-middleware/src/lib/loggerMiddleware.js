const loggerMiddleware = function(store) {
   return function(next) {
      return function(action) {
         console.group(action && action.type);
         console.log('이전 상태', store.getState());
         console.log('액션', action);
         next(action); /// action이 리듀서에 닿음?
         console.log('다음 상태', store.getState()); /// 스토어가 수정된 값을 출력함
         console.groupEnd();
      }
   }
}

export default loggerMiddleware;