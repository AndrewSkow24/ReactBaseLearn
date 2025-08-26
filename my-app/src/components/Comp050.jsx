import uuid from "react-uuid";

function Comp50() {
  return (
    <>
      <h2>50. Неправильное использование функции id в React</h2>
      <p>Неправильно генерировать id прямо в атрибуте</p>
      <ul>
        <li key={uuid()}>1</li>
        <li key={uuid()}>2</li>
      </ul>
    </>
  );
}
export default Comp50;
