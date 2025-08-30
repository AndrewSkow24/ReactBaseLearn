import { useState } from "react";

function Comp060() {
  // task 1
  const [number11, setNumber11] = useState(0);
  const [number12, setNumber12] = useState(0);
  const [result1, setResult1] = useState(0);
  // task 2
  const currentDate = new Date();
  let resultDate = [
    currentDate.getFullYear(),
    +currentDate.getMonth() + 1 < 10
      ? "0" + (+currentDate.getMonth() + 1)
      : +currentDate.getMonth() + 1,
    +currentDate.getDate() < 10 + 1
      ? "0" + currentDate.getDate()
      : currentDate.getDate(),
  ].join("-");
  const [date1, setDate1] = useState(resultDate);
  const [date2, setDate2] = useState(resultDate);
  const [result2, setResult2] = useState(0);

  // task 4
  const [value4, setValue4] = useState("");

  // task 5
  const [value5, setValue5] = useState("");

  function sumOfNum(str) {
    // отдельные цифры
    let numArr = str.split("");
    let sum = 0;
    for (let num of numArr) {
      sum += Number(num);
    }
    return sum;
  }

  function prodOfDiv(number) {
    number = +number;
    let production = 1;
    for (let i = 2; i < number; i++) {
      console.log(i);
      if (number % i == 0) {
        console.log("Делитель: ", i);
        production *= i;
      }
    }
    return production;
  }

  return (
    <>
      <h2>Обработка данных формы по нажатию на кнопку в React</h2>
      <h3>Task 1</h3>
      <p>
        Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По
        нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую
        кнопку - произведение. Результат выводите в абзац.
      </p>
      <input
        type="text"
        value={number11}
        onChange={(event) => {
          setNumber11(event.target.value);
        }}
      />

      <input
        type="text"
        value={number12}
        onChange={(event) => {
          setNumber12(event.target.value);
        }}
      />
      <button onClick={() => setResult1(+number11 + +number12)}>
        Найти сумму чисел
      </button>
      <button onClick={() => setResult1(+number11 * +number12)}>
        Найти произведение
      </button>
      <p>Результат: {result1}</p>
      <h3>Task 2</h3>
      <p>
        Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате
        2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и
        результат выведите в абзац.
      </p>
      <input
        type="text"
        value={date1}
        onChange={(event) => {
          setDate1(event.target.value);
        }}
      />
      <input
        type="text"
        value={date2}
        onChange={(event) => {
          setDate2(event.target.value);
        }}
      />
      <button
        onClick={() => {
          let date1Arr = date1.split("-");
          date1Arr[1] = Number(date1Arr[1]) - 1;
          console.log(date1Arr);
          let date2Arr = date2.split("-");
          date2Arr[1] = Number(date2Arr[1]) - 1;
          console.log(date2Arr);
          let differenceDate = new Date(...date1Arr) - new Date(...date2Arr);
          setResult2(differenceDate / 1000 / 3600 / 24);
          console.log(differenceDate);
        }}
      >
        Вычислить разность в днях
      </button>
      <p>
        Результат: <b>{Math.abs(result2)}</b> дней
      </p>
      <h3>Task 3</h3>
      <p>
        Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла
        текущая дата.
      </p>
      <h3>Task 4</h3>
      <p>
        Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в
        абзац сумму цифр введенного числа.
      </p>
      <input
        type="text"
        value={value4}
        onBlur={(event) => {
          setValue4(event.target.value);
        }}
        onChange={(event) => setValue4(event.target.value)}
      />
      <p>Сумма чисел: {sumOfNum(value4)}</p>

      <h3>Task 5</h3>
      <p>
        Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в
        абзац произведение делителей введенного числа.
      </p>
      <input
        type="text"
        value={value5}
        onChange={(event) => {
          setValue5(event.target.value);
        }}
        onBlur={(event) => {
          {
            setValue5(event.target.value);
          }
        }}
      />

      <p>Произведение делителей введённого числа: {prodOfDiv(value5)}</p>
    </>
  );
}
export default Comp060;
