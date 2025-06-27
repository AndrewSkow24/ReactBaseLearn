import React from "react";

function App() {
  return (
    <div>
      <button
        onClick={(event) => {
          console.log(event.target);
        }}
      >
        Кнопка (выводит в консоль event.target)
      </button>
    </div>
  );
}

export default App;
