import { useState } from "react";

function Comp067() {
  const optTexts = ["text1", "text2", "text3", "text4"];
  const [value, setValue] = useState("");

  const options = optTexts.map((text, index) => {
    return (
      <>
        <option key={index} value={index}>
          {text}
        </option>
      </>
    );
  });

  return (
    <div>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {options}
      </select>
      <p>
        Ваш выбор: <b>{optTexts[value]}</b>
      </p>
    </div>
  );
}

export default Comp067;
