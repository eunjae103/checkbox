import React, { useCallback, useState, useRef } from "react";
import Template from "./Components/Template";
import Insert from "./Components/Insert";
import List from "./Components/List";

const App = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: "사과", active: false },
    { id: 2, text: "바나나", active: false },
    { id: 3, text: "배", active: false },
    { id: 4, text: "딸기", active: false },
  ]);
  const nextId = useRef(5);
  const onInsert = useCallback(
    (text) => {
      const add = { id: nextId.current, text, active: false };
      setFruits(fruits.concat(add));
      nextId.current += 1;
    },
    [fruits]
  );
  const onToggle = (id) => {
    setFruits(
      fruits.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };
  const onRemove = useCallback(
    (id) => {
      setFruits(fruits.filter((item) => item.id !== id));
    },
    [fruits]
  );
  return (
    <Template>
      <Insert onInsert={onInsert} />
      <List fruits={fruits} onToggle={onToggle} onRemove={onRemove} />
    </Template>
  );
};

export default App;
