import { useState } from "react";

function Comp070() {
  // в стейт передаётся массив
  const [notes, setNotes] = useState([1, 2, 3]);
  // вспомогательная функция для нахождения суммы элементов
  function getSum(arr) {
    let sum = 0;
    for (const elem of arr) {
      sum += +elem;
    }
    return sum;
  }
  // функция-обработчик для редактирования интпутов
  function changeHandler(index, event) {
    setNotes([
      ...notes.slice(0, index),
      event.target.value,
      ...notes.slice(index + 1),
    ]);
  }
  const result = notes.map((note, index) => {
    return (
      <input
        key={index}
        value={note}
        onChange={(event) => changeHandler(index, event)}
      />
    );
  });
  return (
    <>
      <h2>70. Привязка inputs к массиву в React</h2>
      {result}

      <p>Сумма элементов: {getSum(notes)}</p>
    </>
  );
}

export default Comp070;
