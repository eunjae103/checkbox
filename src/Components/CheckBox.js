import styled from "styled-components";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

const CheckBox = ({ item, onToggle, onRemove }) => {
  const { id, text, active } = item;

  return (
    <Wrap>
      <Check onClick={() => onToggle(id)}>
        {active ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div>{text}</div>
      </Check>
      <Button
        onClick={() => {
          if (active) {
            onRemove(id);
          }
        }}
      >
        삭제
      </Button>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  background: #ffedbc;
  :first-child {
    border-top: none;
  }
  :nth-child(even) {
    background: #79cbca;
  }
  align-items: center;
  padding: 15px;
`;
const Check = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 18px;
  text-indent: 10px;

  :hover {
    color: #de6262;
    font-weight: bold;
  }
  svg {
    margin-left: 10px;
  }
  cursor: pointer;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #eee;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #333;
`;

export default CheckBox;
