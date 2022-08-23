import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Icon from '../Icon';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({loading, size, ...others}) => {
  if (!loading) return null;
  return (
    <Wrapper>
      {/* <Icon icon="loader" height={size} width={size} {...others} /> */}
    </Wrapper>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  loading: PropTypes.bool,
};

Spinner.defaultProps = {
  size: '36',
  loading: true,
};

export default Spinner;
