import { useState } from "react";

function Comp071() {
  const [date, setDate] = useState({
    year: 2025,
    month: 12,
    day: 31,
  });

  const dateObject = new Date(date.year, date.month - 1, date.day);

  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return (
    <>
      <h2>71. Привязка инпута к объекту в React</h2>
      <h3>Task 1,2</h3>
      <p>
        Пусть в стейте хранится объект с датой: Выведите в абзаце год, месяц и
        день из даты, хранящейся в стейте, а также день недели, соответствующий
        ей. Модифицируйте предыдущую задачу, добавив три инпута для
        редактирования даты.
      </p>
      <label htmlFor="">Год: </label>
      <input
        type="text"
        value={date.year}
        onChange={(event) => {
          setDate({ ...date, ...{ ["year"]: event.target.value } });
        }}
      />{" "}
      <br />
      <label htmlFor="">Месяц: </label>
      <input
        type="text"
        value={date.month}
        onChange={(event) => {
          setDate({ ...date, ...{ ["month"]: event.target.value } });
        }}
      />{" "}
      <br />
      <label htmlFor="">День:</label>
      <input
        type="text"
        value={date.day}
        onChange={(event) => {
          setDate({ ...date, ...{ ["day"]: event.target.value } });
        }}
      />
      <p>
        Год: {date.year} <br />
        Месяц: {date.month} <br />
        День: {date.day} <br />
        День недели: {days[dateObject.getDay()]} <br />
      </p>
    </>
  );
}
export default Comp071;
