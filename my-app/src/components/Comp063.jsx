import { useState } from "react";

function Comp063() {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);

  return (
    <>
      <h2>63. Чекбоксы и условный рендеринг</h2>
      <h3>Task 1</h3>
      <input
        type="checkbox"
        checked={value1}
        onChange={() => {
          setValue1(!value1);
        }}
      />{" "}
      <label htmlFor="">Мне исполнилось 18 лет</label>
      {value1 ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>увы, вам еще нет 18 лет:(</p>
        </div>
      )}
      <h3>Task 2</h3>
      <input
        type="checkbox"
        checked={value2}
        onChange={() => {
          setValue2(!value2);
        }}
      />
      <label htmlFor="">{value2 ? " спрятать абзац" : " показать абзац"}</label>
      {value2 && <p>Абзац, который можно скрыть</p>}
    </>
  );
}
export default Comp063;
