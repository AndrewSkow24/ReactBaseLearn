import { useState } from "react";

function Comp054() {
  const [isBanned, setIsBanned] = useState(true);
  return (
    <>
      <h2>Логическое значение в стейте Реакт</h2>
      <p>Пользователь забанен? {isBanned ? "да" : "нет"}</p>
      <button
        onClick={() => {
          // меняем значение на противоположное
          setIsBanned(!isBanned);
        }}
      >
        {isBanned ? "Разбанить" : "Забанить"}
      </button>
    </>
  );
}

export default Comp054;
