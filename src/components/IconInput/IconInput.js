import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_PROPS = {
  small: {
    size: 16,
    paddingBottom: 5, // 4 + 1 (border width)
  },
  large: {
    size: 24,
    paddingBottom: 8, // 7 + 2 (border width)
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const isEmail = icon === "at sign";
  const iconProps = ICON_PROPS[size];

  return (
    <Wrapper width={width} size={size}>
      <VisuallyHidden>
        <label id="input-label">{label}</label>
      </VisuallyHidden>
      <StyledIcon id={icon} {...iconProps} />
      <Input
        aria-labelledby="input-label"
        size={size}
        type={isEmail ? "email" : "text"}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: ${(p) => p.paddingBottom}px;
  pointer-events: none;
  color: currentColor;
`;

const smallStyles = css`
  font-size: 14px;
  padding: 4px 0;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
`;

const largeStyles = css`
  font-size: 18px;
  padding: 7px 0;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
`;

const Input = styled.input`
  padding: 0;
  outline: none;
  width: 100%;
  border: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
  font-size: inherit;

  ${(p) => p.size === "small" && smallStyles};
  ${(p) => p.size === "large" && largeStyles};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  width: ${(p) => p.width}px;
  height: fit-content;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
