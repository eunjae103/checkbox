import React from "react";
import CheckBoxPage from "./CheckBoxPage";

const CheckBox = () => {
  const fruits = [
    { id: 1, text: "사과" },
    { id: 2, text: "바나나" },
    { id: 3, text: "배" },
    { id: 4, text: "딸기" },
  ];

  return (
    <>
      <form>
        {fruits.map((item) => (
          <CheckBoxPage item={item} key={item.id} />
        ))}
      </form>
    </>
  );
};

export default CheckBox;
