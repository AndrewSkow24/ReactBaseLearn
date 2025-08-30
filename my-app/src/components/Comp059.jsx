import { useState } from "react";

function Comp059() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  return (
    <>
      <h2>59. Работа с несколькими инпутами в React</h2>
      <p>
        Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в
        абзац выводилось среднее арифметическое введенных чисел.
      </p>
      <input
        type="text"
        value={value1}
        onChange={(event) => {
          setValue1(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={value2}
        onChange={(event) => {
          setValue2(event.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        value={value3}
        onChange={(event) => setValue3(event.target.value)}
      />
      <br />
      <input
        type="text"
        value={value4}
        onChange={(event) => setValue4(event.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        value={value5}
        onChange={(event) => setValue5(event.target.value)}
      />
      <br />
      <p>
        Среднее арифметическое:{" "}
        {(+value1 + +value2 + +value3 + +value4 + +value5) / 5}
      </p>
    </>
  );
}
export default Comp059;
