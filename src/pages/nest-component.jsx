import { useState } from "react";

export function NestComponent() {
  const [c, setC] = useState(99);

  return (
    <>
      <h1>NestComponent</h1>
      <Child1 c={c} />
      <button onClick={() => setC(c + 1)}>+</button>
    </>
  );
}

// Prop Drilling
function Child1({ c }) {
  return (
    <>
      <Child2 c={c} />
    </>
  );
}

// Prop Drilling
function Child2({ c }) {
  return <Child3 c={c} />;
}

function Child3({ c }) {
  return (
    <>
      {/* render state c của component NestComponent */}
      {/* <p>{c}</p> */}

      <p>C = {c}</p>
    </>
  );
}
