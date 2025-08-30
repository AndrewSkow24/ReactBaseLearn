import { useState } from "react";

function Comp061() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result2, setResult2] = useState(0);

  function translitToRussian(str) {
    const dictionaryForTranscription = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "shch",
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
    };
    let result = str;

    for (let russianSymbol in dictionaryForTranscription) {
      result = result.replaceAll(
        russianSymbol,
        dictionaryForTranscription[russianSymbol]
      );
    }
    return result;
  }
  return (
    <>
      <h2>Работа с textarea в React</h2>
      <h3>Task 1</h3>
      <p>
        Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился
        транслит вводимого текста.
      </p>
      <textarea
        value={value1}
        onChange={(event) => {
          setValue1(event.target.value);
        }}
      />
      <h4>Транслит</h4>
      <p>{translitToRussian(value1)}</p>
      <h3>Task 2</h3>
      <p>
        Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по
        мере ввода в абзац выводилась сумма введенных чисел.
      </p>
      <textarea
        value={value2}
        onChange={(event) => {
          setValue2(event.target.value);
          let str = event.target.value;
          let numberArr = str.split("\n");
          console.log(numberArr);
          let sum = 0;
          for (let i of numberArr) {
            sum += +i;
          }
          setResult2(sum);
        }}
      />
      <p>Сумма введённых чисел: {result2}</p>
    </>
  );
}

export default Comp061;
