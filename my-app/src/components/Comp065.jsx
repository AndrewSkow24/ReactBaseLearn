import { useState } from "react";

function Comp065() {
  let cities = [
    "Москва",
    "Санкт-Петербург",
    "Тверь",
    "Завидово",
    "Клин",
    "Ивантеевка",
    "Королёв",
  ];
  const [value, setValue] = useState("");
  const optionsCity = cities.map((city, index) => {
    return <option key={index}>{city}</option>;
  });
  return (
    <>
      <h2>65. Пункты select из массива в React </h2>
      <h3>Task 1</h3>
      <p>
        Пусть в массиве хранится список городов. Выведите с помощью цикла
        выпадающий список этих городов.
      </p>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {optionsCity}
      </select>
    </>
  );
}
export default Comp065;
