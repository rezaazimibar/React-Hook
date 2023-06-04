import { useRef, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
const UseRealExample = () => {
  const inputRef = useRef(null);

  const [name, setName] = useState("");

  // const [renderCont, setRenderCont] = useState(1);
  const renderCount = useRef(1);

  const prevName = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    inputRef.current.placeholder = "این یک اسم رندوم است";
  };

  return (
    <>
      <main>
        <div className="input" role="alert">
          <div class="alert alert-danger" role="alert">
            آشنایی با هوک useRef
          </div>
        </div>
        <p dir="rtl">{`میزان رندر های انجام شده:${renderCount.current}`}</p>
        <p dir="rtl">{`نام شما برابر است با :${name}`}</p>
        <p dir="rtl">{`نام شما برابر است با :${prevName.current}`}</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
          type="text"
          dir="rtl"
          className="form-control m-auto my-2 "
          placeholder="اسم وارد کیند"
        />
        <button onClick={focusInput} className="btn btn-primary">
          <FaEye /> تمرکز کن
        </button>
      </main>
    </>
  );
};
export default UseRealExample;
