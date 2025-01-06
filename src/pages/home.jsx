import { useEffect, useState, useCallback, useMemo } from "react";

export function Home() {
  const [g, setG] = useState(0);
  return (
    <>
      <Count g={g} />
      <br />
      <Count g={g} />

      <button onClick={() => setG(g + 1)}>Click</button>

      <audio
        controls
        src="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      />

      <audio
        controls
        src="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      />
    </>
  );
}

// let cache = null;
// const _useCallback = (cb) => {
//   // ghi nhớ cb function mà mình truyền vào
//   // ngược lại thì return về cb mới
//   if (!cache) cache = cb;
//   // if nếu có cache thì lấy trong cache ra
//   return cache;
// };

// let cache = null;
// const _useMemo = (cb) => {
//   // Nếu chưa có thì lưu cache bằng giá trị của function
//   if (!cache) cache = cb();

//   // Nếu có rồi thì return về cache
//   return cache;
// };

function Count({ g }) {
  const [c, setC] = useState(0);

  const handleChange = useCallback(() => {
    setC((preC) => {
      return preC + 1;
    });
  }, []);

  const sv = useMemo(() => {
    return {
      name: "Nguyen Van A",
      age: 20,
    };
  }, []);

  useEffect(() => {
    console.log("sv tao moi");
  }, [sv]);

  return (
    <>
      <button className="text-2xl p-4" onClick={handleChange}>
        Count: {c}
      </button>

      <p>Global: {g}</p>

      {/* <audio
        controls
        src="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      />
    <br />
    <br />
      <audio
        controls
        src="https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      /> */}
    </>
  );
}

// ----------------
/**
 * pure function:
 * - đầu vào giống nhau
 * - đầu phải giống nhau
 */
// impure function:
/**
 * impure function:
 * - đầu vào giống nhau
 * - đầu phải khác nhau
 */

/**
 * Khi code function trong javascript
 */

function sumAb(a, b) {
  return a + b;
}

function sumAb2(a) {
  return a + Math.random();
}

// pure function
sumAb(3, 4); // 7
sumAb(3, 4); // 7

// impure function
sumAb2(3); // 3.00021121
sumAb2(3); // 3.9

// ----------
let b = 10;
function sumAb3(a) {
  return a + b;
}

sumAb3(4); // ?? 14
b = 20;
sumAb3(4); // ?? 24

function abc() {
  let a = 10;
}
abc();
abc();
abc();
abc();
