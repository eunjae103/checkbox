import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const CheckBox = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: "사과", active: true },
    { id: 2, text: "바나나", active: true },
    { id: 3, text: "배", active: false },
    { id: 4, text: "딸기", active: false },
  ]);
  const onToggle = (id) => {
    setFruits(
      fruits.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <>
      <Box>
        <Insert>
          <input type="text" placeholder="좋아하는 과일을 입력하세요" />
        </Insert>
        {fruits.map((item) => (
          <Check key={item.id} onClick={() => onToggle(item.id)}>
            {item.active ? <MdFavorite /> : <MdFavoriteBorder />}
            {item.text}
          </Check>
        ))}
      </Box>
    </>
  );
};

const Insert = styled.div`
  border: 1px solid red;
  height: 50px;
  display: flex;
  flex: 1;
  input {
    border: 1px solid #333;
  }
`;
const Box = styled.div`
  border: 3px solid #333;
  width: 300px;
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
