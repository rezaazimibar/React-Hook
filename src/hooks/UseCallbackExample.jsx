import { useState, useEffect, useCallback,  } from "react";
const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return items.map((item, index) => <div key={index}>{item}</div>);
};

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [colorChange, setColorChange] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const appStyle = {
    backgroundColor: colorChange ? "tomato" : "white",
  };

  useEffect(() => {
    console.log("Background Changed 🌈");
  }, [appStyle]);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50" style={appStyle}>
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
        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default UseCallbackExample;
