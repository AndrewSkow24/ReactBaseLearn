import { use, useState } from "react";

function Comp052() {
  // воспользуемся функцией useState для создания стейта,
  // содержащего название продукта

  //   const state = useState("prod");

  /* В результате константа state будет предаставлять собой массив, в первом 
  элементе которого будет хранится название продукта, а во втором функция для 
  его изменения.  */

  //   const name = state[0];
  //   const setName = state[1];

  //   console.log(state);

  // для краткости обычно не используют промежуточную константу для массива, а используют
  // деструктуризацию

  const [name, setName] = useState("prod");

  const [userName, setUserName] = useState("Иван");
  const [userLastName, setUserLastName] = useState("Петров");
  const [userAge, setUserAge] = useState(19);

  return (
    <>
      <h2>52. Использование стейтов в React</h2>
      <h3>Выводим стейт</h3>
      <p>{name}</p>
      <h3>Task 1</h3>
      <p>
        Пусть вы хотите отображать на экране данные юзера: его имя, фамилию,
        возраст. Сделайте для этого соответствующие стейты с начальными
        значениями.
      </p>
      <h3>Решение</h3>
      <p>
        Имя: <b>{userName}</b> <br />
        Фамилия: <b>{userLastName}</b> <br />
        Возраст: <b>{userAge}</b>
      </p>
    </>
  );
}

export default Comp052;
