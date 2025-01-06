import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tangValue } from "../redux/counter.slice";

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
  // Lấy state của counterSlice
  const value = useSelector((store) => {
    return store.counterReducer.value;
  });
  return (
    <>
      <h2>Child1</h2>
      <p>Redux: {value}</p>
      <Child2 c={c} />
    </>
  );
}

// Prop Drilling
function Child2({ c }) {
  const dispatch = useDispatch();

  return (
    <>
      <Child3 c={c} />
      <button
        onClick={() => {
          //   tangValue(); // ❌

          dispatch(tangValue()); // ✅
        }}
        className="p-4 text-2xl"
      >
        +
      </button>
    </>
  );
}

function Child3({ c }) {
  const countValue = useSelector((store) => {
    console.log(store);
    return store.counterReducer.value;
  });

  const count2Value = useSelector((store) => {
    return store.counter.value;
  });

  return (
    <>
      {/* render state c của component NestComponent */}
      {/* <p>{c}</p> */}

      <p>C = {c}</p>

      <p>Count Redux: {countValue}</p>
    </>
  );
}
