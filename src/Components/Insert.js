import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      value && onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <Inserton>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          maxLength={15}
          placeholder="좋아하는 과일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </Inserton>
  );
};
const Inserton = styled.div`
  height: 60px;
  display: flex;
  padding: 10px;
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
    padding: 10px;
    width: 50px;
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
