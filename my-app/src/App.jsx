import React from "react";

const App = () => {
  const isAuth = false;

  return <div>{!isAuth && <p>Пожалуйста, авторизируйтесь!</p>}</div>;
};

export default App;
