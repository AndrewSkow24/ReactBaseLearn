import { useState } from "react";

const Comp057 = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <h2>Изменение данных инпута при их выводе в React</h2>
      <p>
        Дан инпут. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в
        абзаце выводилось количество введенных в инпут символов.
      </p>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <p>
        Количество введённые символов: <b>{value.length}</b>
      </p>
    </>
  );
};

export default Comp057;
