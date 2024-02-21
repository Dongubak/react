const MyComponent = (props) => {
   const {count, setCount} = props;

   const onClickCount = () => {
      setCount(count + 1);
   };
   return (
      <div>
         <h2>{props.children}</h2>
         <button onClick={onClickCount}>+1</button>
      </div>
   )
};

MyComponent.defaultProps ={
   name: '기본 이름'
};

export default MyComponent;