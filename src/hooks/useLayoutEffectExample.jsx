import { useState, useEffect,useLayoutEffect,useImperativeHandle } from "react";

const UseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`changed ${count}`);
  }, [count]);
  useLayoutEffect(()=>{
    console.log(`useLayoutEffect${count}`)
  },[count])

  return (
    <>
      <div class="alert alert-danger" role="alert">
        آشنایی با هوک useLayoutEffect
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        اضافه کن
      </button>
      <p>{`  عدد برابر است با  : ${count}`}</p>
    </>
  );
};
export default UseLayoutEffectExample