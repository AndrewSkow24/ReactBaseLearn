import React from "react";

function App() {
  const obj = {
    name: "John",
    surname: "Smith",
  };

  return (
    <p>
      name: <span>{obj.name}</span>
      <br />
      surname: <span>{obj.surname}</span>
    </p>
  );
}

export default App;
