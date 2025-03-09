import React, { useState, useEffect } from "react";
import UsestateHook from "./Usestatehook";

const Useeffecthook = () => {
  const [count, setCount] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    alert("show in every render");
  }, [count, total]);

  function handleClicked() {
    setCount((prev) => prev - 1);
  }
  function handleClickedTotal() {
    setTotal((prev) => prev + 1);
  }
  return (
    <>
      <p>you have clicked {count} times</p>
      <button onClick={handleClicked}>click</button>

      <br />
      <p>you have clicked {total} times</p>
      <button onClick={handleClickedTotal}>click</button>
    </>
  );
};
export default Useeffecthook;
