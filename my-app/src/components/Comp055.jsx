import { useState } from "react";

function Comp055() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>Счётчик на стейтах в Реакт</h2>
      <h3>Task 1</h3>
      <p>
        Пусть в стейте хранится число. Выведите это число в абзаце. Сделайте две
        кнопки. Пусть первая кнопка увеличивает возраст на единицу, а вторая -
        уменьшает его.
      </p>
      <p>
        Число: <span>{number}</span>
      </p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </>
  );
}

export default Comp055;
