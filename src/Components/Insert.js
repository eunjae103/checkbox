import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    onInsert(value);
    setValue("");
  }, [onInsert, value]);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  
  return (
    <Inserton>
      <input
        type="text"
        placeholder="좋아하는 과일을 입력하세요"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        Add
      </button>
    </Inserton>
  );
};
const Inserton = styled.div`
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
export default Insert;
