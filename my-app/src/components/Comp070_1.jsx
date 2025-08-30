import { useState } from "react";

function Comp070_1() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  function getAverage(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += +elem;
    }
    return sum / arr.length;
  }

  const inputs = arr.map((value, index) => {
    return (
      <input
        value={value}
        key={index}
        onChange={(event) => {
          console.log(index);
          console.log(event);
          setArr([
            ...arr.slice(0, index),
            event.target.value,
            ...arr.slice(index + 1),
          ]);
        }}
      />
    );
  });

  return (
    <>
      <h2>70. Task 1</h2>
      <p>
        Дан следующий массив: [1, 2, 3, 4, 5, 6, 7, 8, 9] Выведите на экран
        среднее арифметическое элементов этого массива. В цикле сделайте инпуты
        для редактирования элементов.
      </p>
      {inputs}
      <p>Среднее арифметическое: {getAverage(arr)}</p>
    </>
  );
}
export default Comp070_1;
