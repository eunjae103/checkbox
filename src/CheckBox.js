import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const CheckBox = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: "사과", active: false },
    { id: 2, text: "바나나", active: false },
    { id: 3, text: "배", active: false },
    { id: 4, text: "딸기", active: false },
  ]);
  const onToggle = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, active: !fruit.active } : fruit
      )
    );
  };

  return (
    <>
      <Box>
        <Insert>
          <input type="text" placeholder="좋아하는 과일을 입력하세요" />
          <button type="button">Add</button>
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
  height: 60px;
  display: flex;
  padding: 20px;
  background: #ffb88c;
  input {
    border: none;
    background: none;
    outline: none;
    border: 1px solid #333;
    font-size: 18px;
    padding: 10px;
    margin-right: 10px;
    background: #fff;
    ::placeholder {
      font-size: 15px;
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
    width: 70px;
    border: 1px solid #666;
    background: #fff;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #333;
    transition: 0.3s ease-in;
    :hover {
      background: #999;
      color: #fff;
    }
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
  :nth-child(even) {
    background: #79cbca;
  }
  font-size: 18px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: #333;
  background: #ffedbc;
  :hover {
    color: #de6262;
    font-weight: bold;
  }
  svg {
    margin-left: 10px;
  }
  cursor: pointer;
`;

export default CheckBox;
