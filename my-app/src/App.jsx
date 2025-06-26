import React from "react";

function App() {
  const isAdult = false;

  let textForUser = "";
  if (isAdult)
    textForUser = <p>Но ты уже взрослый, и больше не будешь слушать сказки</p>;
  else textForUser = <p>Возможно у тебя есть паспорт, но тебе нет 18</p>;

  return (
    <div>
      <h1>Тест совершеннолетия:</h1>
      {textForUser}
    </div>
  );
}

export default App;
