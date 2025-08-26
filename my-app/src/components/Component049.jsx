import uuid from "react-uuid";

function Component049() {
  const prods = [
    { id: uuid(), name: "product1", cost: 100 },
    { id: uuid(), name: "product2", cost: 200 },
    { id: uuid(), name: "product3", cost: 300 },
  ];
  return (
    <>
      <ul>
        <h2>49. Использование функции id в React</h2>
        {prods.map((el) => {
          return (
            <li key={el.id}>
              {el.id} {el.name} {el.cost}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Component049;
