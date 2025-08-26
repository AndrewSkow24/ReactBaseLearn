import { useState } from "react";

function Comp053() {
  const [name, setName] = useState("Иван");
  const [lastName, setLastName] = useState("Иванов");
  return (
    <>
      <h2>Реактивность стейтов в React</h2>
      <h3>Task 1</h3>
      <p>
        Даны стейты с именем и фамилией юзера. Выведите их в верстке. Сделайте
        кнопки для изменения этих стейтов.
      </p>
      <p>
        Имя: {name}{" "}
        <button
          onClick={() => {
            setName("Пётр");
          }}
        >
          Сменить имя
        </button>{" "}
        <br />
        Фамилия: {lastName}{" "}
        <button
          onClick={() => {
            setLastName("Петров");
          }}
        >
          Сменить фамилию
        </button>
      </p>
    </>
  );
}
export default Comp053;
