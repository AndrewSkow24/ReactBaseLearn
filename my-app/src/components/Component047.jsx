import { nanoid } from "nanoid";
import uuid from "react-uuid";

const Component047 = () => {
  const id = uuid();

  return (
    <>
      <h2>Генерация случайных id</h2>
      <h3>Использование библиотеки nanoid</h3>
      <p>Результат функции nanoid(): {nanoid()}</p>
      <h3>Использование библиотеки react-uuid</h3>
      <p>Сгенерированный UUID: {id}</p>
    </>
  );
};

export default Component047;
