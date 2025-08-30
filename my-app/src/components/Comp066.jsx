import { useState } from "react";

function Comp066() {
  const [value, setValue] = useState("");
  return (
    <>
      <h2>66. Атрибуты value в select React</h2>
      <p>
        С помощью выпадающего списка предложите пользователю выбрать к какой
        возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до
        25, либо старше 25 лет.
      </p>
      <h3>Выберете свою возрастную группу</h3>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <option value="1">0-12 лет</option>
        <option value="2">13-17 лет</option>
        <option value="3">18 - 25 лет</option>
        <option value="4">старше 25 лет</option>
      </select>
      <p>
        {/* {value} */}
        {value == "1" && "вы выбрали 0-12 лет"}
        {value == "2" && "вы выбрали 13-17 лет"}
        {value == "3" && "вы выбрали 18-25 лет"}
        {value == "4" && "вы выбрали старше 25 лет"}
      </p>
    </>
  );
}
export default Comp066;
