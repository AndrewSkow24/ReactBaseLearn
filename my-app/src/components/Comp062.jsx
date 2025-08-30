import { useState } from "react";

function Comp062() {
  const [value1, setValue1] = useState(false);
  const [p1, setP1] = useState("");

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  return (
    <>
      <h2>Работа с checkbox</h2>
      <h3>Task 1</h3>
      <p>
        Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен,
        выведите в абзац текст приветствия с пользователем, а если не отмечен -
        текст прощания.
      </p>
      <input
        type="checkbox"
        checked={value1}
        onChange={() => {
          setValue1(!value1);
        }}
      />
      <button
        onClick={() => {
          if (value1) {
            setP1("Привет, пользователь");
          } else {
            setP1("Пока, пользователь!");
          }
        }}
      >
        Вывести значение
      </button>
      <p>{p1}</p>
      <h3>Task 2</h3>
      <p>
        С помощью трех чекбоксов попросите пользователя выбрать языки, которые
        он знает: html, css и js. Результат выбора по каждому языку выводите в
        отдельные абзацы.
      </p>
      <input
        type="checkbox"
        checked={html}
        onChange={() => {
          setHtml(!html);
        }}
      />{" "}
      <label htmlFor="">html</label> <br />
      <input
        type="checkbox"
        checked={css}
        onChange={() => {
          setCss(!css);
        }}
      />{" "}
      <label htmlFor="">css</label> <br />
      <input
        type="checkbox"
        checked={js}
        onChange={() => {
          setJs(!js);
        }}
      />{" "}
      <label htmlFor="">JavaScript</label> <br />
      <p>{html ? "Вы выбрали html" : ""}</p>
      <p>{css ? "Вы выбрали css" : ""}</p>
      <p>{js ? "Вы выбрали js" : ""}</p>
    </>
  );
}
export default Comp062;
