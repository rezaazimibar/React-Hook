import "./App.css";
import UseRealExample from "./hooks/UseRealExample";
import { FaRocket } from "react-icons/fa";

const App = () => {
  return (
    <>
      <header className=" text-center py-5 mx-48 border-b-2">
        <h1 className=" flex justify-center"><FaRocket/>بارگیری و استفاده از هوک های ریکت </h1>
      </header>
      <main className="text-center my-10">

        <UseRealExample />
      </main>
    </>
  );
};

export default App;
