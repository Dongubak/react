const MyComponent = (props) => {
   const onClickUp = props.onClickUp;

   return (
      <div>
         <button onClick={onClickUp}>+1</button>
      </div>
   )
};

MyComponent.defaultProps ={
   name: '기본 이름'
};

export default MyComponent;