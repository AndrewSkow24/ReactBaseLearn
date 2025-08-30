import { useState } from "react";

function Comp068() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  function changeHandler1(event) {
    setValue1(event.target.value);
  }
  return (
    <>
      <h2>68. Работа с radio в React</h2>
      <h3>Task 1</h3>
      <p>
        Даны 3 радиокнопочки. Дан абзац. Сделайте так, чтобы значение выбранной
        радиокнопочки выводилось в этот абзац.
      </p>
      <input
        type="radio"
        name="radio"
        value="1"
        onChange={changeHandler1}
        checked={value1 == "1" ? true : false}
      />
      <label htmlFor="">Радио кнопка 1</label> <br />
      <input
        type="radio"
        name="radio"
        value="2"
        onChange={changeHandler1}
        checked={value1 == "2" ? true : false}
      />
      <label htmlFor="">Радио кнопка 2</label> <br />
      <input
        type="radio"
        name="radio"
        value="3"
        onChange={changeHandler1}
        checked={value1 == "3" ? true : false}
      />
      <label htmlFor="">Радио кнопка 3</label> <br />
      <p>Значение выбранной радиокнопки {value1}</p>
      <h3>Task 2</h3>
      <p>
        С помощью радиокнопочек спросите у пользователя его любимый язык
        программирования. Выведите его выбор в абзац. Если выбран язык
        JavaScript, похвалите пользователя.
      </p>
      <input
        type="radio"
        value="1"
        onChange={(event) => {
          setValue2(event.target.value);
        }}
        checked={value2 == 1 ? true : false}
      />
      <label htmlFor="">HTML</label> <br />
      <input
        type="radio"
        value="2"
        onChange={(event) => {
          setValue2(event.target.value);
        }}
        checked={value2 == 2 ? true : false}
      />
      <label htmlFor="">CSS</label> <br />
      <input
        type="radio"
        value="3"
        onChange={(event) => {
          setValue2(event.target.value);
        }}
        checked={value2 == 3 ? true : false}
      />
      <label htmlFor="">JS</label> <br />
      <p>
        Вы выбрали язык: {value2 == 1 ? "HTML" : ""}
        {value2 == 2 ? "CSS" : ""}
        {value2 == 3 ? "JS - похвальный выбор" : ""}
      </p>
    </>
  );
}
export default Comp068;
