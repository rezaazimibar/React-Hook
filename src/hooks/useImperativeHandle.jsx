import { useRef, forwardRef, useImperativeHandle } from "react";

let FunctionInput = (props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  const inputRef = useRef();
  return <input ref={inputRef} {...props} />;
};

FunctionInput = forwardRef(FunctionInput);

const UseImperativeHandleExample = () => {
  const inputRef = useRef(null);
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div className="alert alert-warning">
        آشنایی با هوک useImperativeHandle
      </div>
      <FunctionInput
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="متن خود را وارد کنید"
      />
      <button className="btn btn-primary mt-2" onClick={focus}>
        فوکوس
      </button>
    </>
  );
};
export default UseImperativeHandleExample;
