import { useState, useEffect, useCallback } from "react";
const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return items.map((item, index) => <div key={index}>{item}</div>);
};

const superSlowFunction = (num) => {
  console.log("Super Slow Function Is Running 🦥");
  let count = 0;
  //NOTE Delay the return
  while (count <= 1000000000) {
    count++;
  }
  return num * 2;
};

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [colorChange, setColorChange] = useState(false);

  const doubleNumber = useMemo(() => superSlowFunction(number), [number]);

  //referential equality
  const appStyle = useMemo(() => {
    return {
      backgroundColor: colorChange ? "tomato" : "white",
    };
  }, [colorChange]);

  useEffect(() => {
    console.log("Background Changed 🌈");
  }, [appStyle]);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-primary text-center">آشنایی با هوک useMemo</h5>
      <input
        type="number"
        className="form-control"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="عدد وارد بنما"
      />
      <button
        type="button"
        className="btn btn-info btn-block"
        onClick={() => setColorChange((prevColorChange) => !prevColorChange)}
      >
        رنگ رو تغییر بده 🖌️
      </button>
      <div style={appStyle} className="text-center mx-auto">
        <p className="alert alert-warning">{`عدد دو برابر شده برابر است با : ${doubleNumber}`}</p>
      </div>
    </div>
  );
};

export default UseCallbackExample;
