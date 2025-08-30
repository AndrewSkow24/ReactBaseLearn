import { useState } from "react";

function Comp064() {
  const [value, setValue] = useState("");
  return (
    <>
      <h2>64. Работа с select в React</h2>
      <p>
        Сделайте выпадающий список городов. Сделайте также абзац, в который
        будет выводиться выбор пользователя.
      </p>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <option>Москва</option>
        <option>Тула</option>
        <option>Ростов-на-Дону</option>
        <option>Воронеж</option>
        <option>Краснодар</option>
        <option>Тамбов</option>
      </select>
      <p>
        Вы выбрали: <b>{value}</b>
      </p>
    </>
  );
}
export default Comp064;
