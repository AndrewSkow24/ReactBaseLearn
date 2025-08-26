import uuid from "react-uuid";
import { nanoid } from "nanoid";

function Component048() {
  function id() {
    return uuid();
  }
  function id2() {
    return nanoid();
  }
  return (
    <>
      <h2>48. Функция для генерации id в React</h2>
      <p>{id()}</p>
      <p>{id2()}</p>
    </>
  );
}
export default Component048;
