import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };
  const subHandler = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(+e.currentTarget.value);
  };

  return (
    <>
      <h1>Functional Component</h1>
      <div>{counter}</div>
      <button onClick={addHandler}>+</button>
      <button onClick={subHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
      <input type="number" defaultValue={0} onChange={changeHandler} />
    </>
  );
};

export default Counter;
