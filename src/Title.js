import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import {ifProp, switchProp, prop} from 'styled-tools';

const StyledTitle = styled.h1`
  color: ${palette('primary', 0)};
  font-size: ${switchProp('size', {
    default: '22px',
    sub: '28px',
    large: '43px',
  })};
`;

export const Title = ({children, ...props}) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

Title.propTypes = {
  size: PropTypes.oneOf(['default', 'sub', 'large']),
};
Title.defaultProps = {
  size: 'default',
};
