import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return <Box>{children}</Box>;
};
const Box = styled.div`
  border: 3px solid #333;
  width: 300px;
  margin: 100px auto 0;
`;
export default Template;
