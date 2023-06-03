import { useRef, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
const UseRealExample = () => {
  const inputRef = useRef(null);

  const [name, setName] = useState("");

  // const [renderCont, setRenderCont] = useState(1);
  const renderCount=useRef(1)

  const prevName = useRef("");


  useEffect(() => {
    inputRef.current.focus();
  }, []);


  useEffect(() => {
    prevName.current = name;
  }, [name]);


  useEffect(() => {
    renderCount.current=renderCount.current+1
  });


  const focusInput = () => {
    inputRef.current.placeholder = "این یک اسم رندوم است";
  };


  return (
    <>
      <main>
        <div
          className="bg-teal-100 border-t-4 w-1/3 m-auto border-teal-500 transition rounded-b text-teal-900 hover:shadow-none hover:translate-y-2 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex justify-center w">
            <div>
              <p className="font-bold">useRef آشنایی با هوک</p>
            </div>
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
          className="input m-auto my-5 "
          placeholder="اسم وارد کیند"
        />
        <button
          onClick={focusInput}
          className="btn w-1/3 m-auto flex justify-center"
        >
          <FaEye />
          تمرکز کن
        </button>
      </main>
    </>
  );
};
export default UseRealExample;
