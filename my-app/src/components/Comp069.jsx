import { useState } from "react";

function Comp069() {
  const [value, setValue] = useState("text");
  const [checked, setChecked] = useState("true");
  return (
    <>
      <h2>Значения по умолчанию в React</h2>
      <input type="text" defaultValue={value} />
      <input type="checkbox" defaultChecked={checked} />
    </>
  );
}

export default Comp069;
