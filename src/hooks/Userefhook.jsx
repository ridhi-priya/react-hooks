// import React, { useState, useRef } from "react";

// const Userefhook = () => {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);

//   let btnRef = useRef();

//   function handleChange() {
//     btnRef.current.style.backgroundColor = "red";
//   }
//   function handleClicked() {
//     setCount((prev) => prev + 1);
//     val.current = val.current + 1;
//     console.log("val value is " + val.current);
//   }
//   return (
//     <>
//       <p>you have clicked {count} times</p>
//       <button onClick={handleChange}>increment</button>
//       <button ref={btnRef} onClick={handleClicked}>
//         click
//       </button>
//     </>
//   );
// };

// export default Userefhook;

import React, { useRef } from "react";

const Userefhook = () => {
  function handleClick() {
    btnRef.current.style.backgroundColor = "red";
  }
  let btnRef = useRef();
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button ref={btnRef}>change color</button>
    </>
  );
};

export default Userefhook;
