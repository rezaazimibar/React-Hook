import { useState, useMemo, useEffect, useDeferredValue } from "react";

const List = ({ value }) => {
  const deferredValue=useDeferredValue(value)
  const list = useMemo(() => {
    const numbersList = [];
    let count = 0;

    while (count <= 20000) {
      numbersList.push(<div key={count}>{`عدد برابر است با ${deferredValue}`}</div>);
      count++;
    }
    return numbersList;
  }, [deferredValue]);
  useEffect(() => {
    console.log(`value:${value}`);
  }, [value]);
  return list;
};

const UseDeferredValue = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== 0 ? <List value={value} /> : null}
    </>
  );
};
export default UseDeferredValue;
