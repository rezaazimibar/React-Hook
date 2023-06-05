import Accordion from "./component/accordion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  UseCallbackExample,
  UseMemoExample,
  UseRealExample,
  UseReducerExample,
  UseLayoutEffectExample,
  useImperativeHandle,
  UseImperativeHandleExample
} from "./hooks/index.js";

import { FaRocket } from "react-icons/fa";

const App = () => {
  return (
    <>
      <header className=" text-center py-5 mx-48 border-b-2">
        <h1 className=" flex justify-center">
          <FaRocket />
          بارگیری و استفاده از هوک های ریکت{" "}
        </h1>
      </header>
      <main className="text-center my-10">
        <hr className="text-danger" />
        <Accordion title="مثال هوک useRef" heading="headingOne">
          <UseRealExample />
        </Accordion>
        <hr className="text-primary" />
        <Accordion title="مثال هوک useMemo" heading="headingTwo">
          <UseMemoExample />
        </Accordion>
        <hr className="text-success" />
        <Accordion title="مثال هوک useCallback" heading="headingThree">
          <UseCallbackExample />
        </Accordion>
        <hr className="text-success" />
        <Accordion title="مثال هوک useReducer" heading="headingFourth">
          <UseReducerExample />
        </Accordion>
        <hr className="text-success" />
        <Accordion title="مثال هوک useReducer" heading="headingFifth">
          <UseLayoutEffectExample />
        </Accordion>
        <hr className="text-success" />
        <Accordion title="مثال هوک useReducer" heading="headingSixth">
          <UseImperativeHandleExample />
        </Accordion>
        <hr className="text-success" />
      </main>
    </>
  );
};

export default App;
