import React, { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(10);

  function handleClicked() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <p>you have clicked {count} times</p>
      <button onClick={handleClicked}>Click me</button>
    </>
  );
};

export default Usestatehook;
