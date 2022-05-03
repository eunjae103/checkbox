import React from "react";
import CheckBox from "./CheckBox";

const List = ({ fruits, onToggle, onRemove }) => {
  return (
    <>
      {fruits.map((item) => (
        <CheckBox
          item={item}
          key={item.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default List;
