import React from "react";

function App() {
  function getDigitsSum(num) {
    let numInString = String(num);
    let sumOfNum = 0;
    for (let i = 0; i < numInString.length; i++) {
      console.log(numInString[i]);
      sumOfNum += Number(numInString[i]);
    }

    return sumOfNum;
  }

  return (
    <div>
      <p>Сумма цифр числа 123 составляет: {getDigitsSum(123)} </p>
      <p>Сумма цифр числа 57 составляет: {getDigitsSum(57)} </p>
    </div>
  );
}

export default App;
