import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {ifProp, switchProp, prop} from 'styled-tools';

import {palette, font} from 'styled-theme';
import Spinner from './Spinner';

const backgroundColor = ({transparent, disabled, primaryColor}) => {
  if (transparent) return palette('white', 0);
  if (disabled) return palette('grayscale', 4);
  if (primaryColor) return palette('primary', 0);
  return palette(0);
};

const foregroundColor = ({transparent, disabled}) => {
  if (transparent) {
    return disabled ? palette('grayscale', 3) : palette(3);
  }

  return palette('grayscale', 0, true);
};

const hoverBackgroundColor = ({disabled, transparent}) =>
  !disabled && (transparent ? palette('white', 1) : palette(0));
const hoverForegroundColor = ({disabled, transparent}) =>
  !disabled && transparent && palette(0);

const styles = css`
  display: block;
  font-family: ${font('primary')};
  font-size: ${switchProp('size', {
    small: '12px',
    medium: '14px',
    large: '16px',
  })};
  font-weight: ${switchProp('size', {
    small: '400',
    medium: '500',
    large: '700',
  })};
  line-height: ${switchProp('size', {
    small: '22px',
    medium: '30px',
    large: '46px',
  })};

  height: ${switchProp('size', {
    small: '28px',
    medium: '36px',
    large: '52px',
  })};

  ${'' /* height: 100px; */}
  min-width: 40px;
  border: 1px solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  ${ifProp(
    'borderColor',
    css`
      border-color: ${({borderColor}) => borderColor};
    `
  )}
  border-radius: 0px;
  padding: 2px 24px;
  ${
    '' /* margin-top: 16px;
  margin-bottom: 16px; */
  }

  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'no-drop', 'pointer')};
  appearance: none;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: all 0.15s ease;
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  font-weight: bold;
  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none;
  }
`;

const StyledLink = styled(
  ({disabled, transparent, palette, theme, ...props}) => <Link {...props} />
)`
  ${styles};
`;
const Anchor = styled.a`
  ${styles};
`;

const StyledButton = styled.button`
  ${styles};
`;
/**
 * 작업을 실행시킬 때 사용합니다.
 * 버튼의 타입은 이렇게 나눠집니다.
  - Primary button: 기본 버튼
  - Secondary button: 보조 버튼
  - Text button: 텍스트 버튼
  - Link button: 링크 버튼
 */
export const Button = ({
  type,
  isAsync,
  onClick,
  loaderStroke,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  if (props.to) {
    return <StyledLink {...props}>{children}</StyledLink>;
  } else if (props.href) {
    return <Anchor {...props}>{children}</Anchor>;
  }

  const asyncOnClick = (...args) => {
    setLoading(true);
    if (loading) return;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 100);
    })
      .then(() => Promise.resolve(onClick(...args)))
      .then((result) => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
        return result;
      })
      .catch((e) => {
        setLoading(false);
        throw e;
      });
  };

  const parsedOnClick = !isAsync ? onClick : asyncOnClick;

  return (
    <StyledButton {...props} onClick={parsedOnClick} type={type}>
      {loading ? (
        <Spinner {...(loaderStroke ? {stroke: loaderStroke} : {})} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  palette: PropTypes.string,
  /**
   * 버튼 비활성화
   */
  disabled: PropTypes.bool,
  /**
   * 투명화(Hover)
   */
  transparent: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  /**
   * Button는 3가지 크기로 제공됩니다.
   * 대부분의 경우 '중간'크기로 지정됩니다.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  palette: 'primary',
};
/**
 * Primary UI component for user interaction
 */
