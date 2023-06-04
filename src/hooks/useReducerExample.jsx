import {  useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerExample = () => {
//   const [count, setCount] = useState(0);
//   const inc = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const dec = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inc = () => {
    dispatch({ type: "INCREMENT" });
  };
  const dec = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div class="alert alert-danger" role="alert">
        اشنایی با هوک useReducer
      </div>
      <button className="btn btn-primary px-5" onClick={inc}>
        افزایش بده
      </button>
      <div class="alert alert-warning my-3" role="alert">
        {`عدد برابر است با : ${state.count}`}
      </div>
      <button className="btn btn-danger px-5" onClick={dec}>
        کاهش بده
      </button>
    </>
  );
};
export default UseReducerExample;
