import { useState } from "react";

function Comp058() {
  const [age, setAge] = useState(0);
  const [temperatureF, setTemperatureF] = useState(0);

  function getDateBirth(event) {
    setAge(event.target.value);
  }

  const currentYear = new Date().getFullYear();

  function convertToC(F) {
    return (F - 32) / 1.8;
  }

  return (
    <>
      <h2>Task 1</h2>
      <p>
        Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так,
        чтобы при наборе текста, в абзаце автоматически появлялся год рождения
        пользователя.
      </p>
      <input type="text" value={age} onChange={getDateBirth} />
      <p>Год рождения: {currentYear - age}</p>
      <h2>Task 2</h2>
      <p>
        Дан инпут и абзац. В инпут вводятся градусы Фаренгейта. Сделайте так,
        чтобы при наборе текста, в абзаце автоматически выполнялась конвертация
        в градусы Цельсия.
      </p>
      <input
        type="text"
        value={temperatureF}
        onChange={(event) => {
          setTemperatureF(event.target.value);
        }}
      />
      <p>
        Температура в Цельсиях: <b>{convertToC(temperatureF)}</b>
      </p>
    </>
  );
}
export default Comp058;
