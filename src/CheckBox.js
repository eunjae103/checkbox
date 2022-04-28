import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const CheckBox = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: "사과" },
    { id: 2, text: "바나나" },
    { id: 3, text: "배" },
    { id: 4, text: "딸기" },
  ]);
  const [select, setSelect] = useState([]);

  return (
    <Box>
      {fruits.map((item) => (
        <Check
          key={item.id}
          onClick={() => {
            !select.includes(item.id)
              ? setSelect((select) => [...select, item.id])
              : setSelect(select.filter((button) => button !== item.id));
          }}
        >
          {select.includes(item.id) ? <MdFavorite /> : <MdFavoriteBorder />}
          {item.text}
        </Check>
      ))}
    </Box>
  );
};

const Box = styled.div`
  border: 3px solid #333;
  width: 200px;
  margin: 100px auto 0;
`;
const Check = styled.div`
  /* line-height: 50px; */
  height: 50px;
  border-top: 1px solid #666;
  :first-child {
    border-top: none;
  }
  font-size: 18px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  svg {
    margin-left: 10px;
  }
  cursor: pointer;
`;

export default CheckBox;
