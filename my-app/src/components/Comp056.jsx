import { useState } from "react";

function Comp056() {
  const [value, setValue] = useState("text");
  const [valueInput1, setValueInput1] = useState("input1");
  const [valueInput2, setValueInput2] = useState("input2");

  return (
    <>
      <h2>56. Работа с инпутами в React</h2>
      <p>
        Работа с инпутами в Реакт происходит с помощью стейтов. Каждому инпуту
        назначается свой стейт, содержащий value инпута.
      </p>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <p>{value}</p>
      <h3>Task 1</h3>
      <p>
        Сделайте два инпута. Пусть текст первого инпута выводится в первый
        абзац, а текст второго инпута - во второй абзац.
      </p>
      <input
        type="text"
        value={valueInput1}
        onChange={(event) => {
          setValueInput1(event.target.value);
        }}
      />
      <p>{valueInput1}</p>
      <input
        type="text"
        value={valueInput2}
        onChange={(event) => {
          setValueInput2(event.target.value);
        }}
      />
      <p>{valueInput2}</p>
    </>
  );
}
export default Comp056;
