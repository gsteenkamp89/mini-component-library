import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_PROPS = {
  small: {
    iconSize: 16,
    iconSpacing: 4, // 4 + 1 (border width)
    height: 24,
    fontSize: 14,
    borderWidth: 1,
  },
  large: {
    iconSize: 24,
    iconSpacing: 6, // 7 + 2 (border width)
    height: 36,
    fontSize: 18,
    borderWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const isEmail = icon === "at sign";
  const iconProps = SIZE_PROPS[size];

  return (
    <Wrapper
      style={{
        "--height": iconProps.height + "px",
        "--font-size": iconProps.fontSize + "px",
        "--border-width": iconProps.borderWidth + "px",
        "--icon-spacing": iconProps.iconSpacing + "px",
      }}
      width={width}
      size={size}
    >
      <VisuallyHidden>
        <label id="input-label">{label}</label>
      </VisuallyHidden>
      <StyledIcon id={icon} size={iconProps.iconSize} />
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
  bottom: var(--icon-spacing);
  pointer-events: none;
  color: currentColor;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
  font-size: inherit;
  padding-left: var(--height);
  height: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: var(--border-width) solid ${COLORS.primary};
    outline-offset: calc(
      var(--border-width) * 2
    ); // must account for underline border while using border-box
    border-radius: 2px;
  }
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  width: ${(p) => p.width}px;
  height: fit-content;
  position: relative;
  font-size: var(--font-size);
  border-bottom: var(--border-width) solid ${COLORS.black};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
