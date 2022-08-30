import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>
        <Label id="label" aria-label="label">
          {label}
        </Label>
      </VisuallyHidden>

      <SelectOverlay aria-labelledby="label" value={value} onChange={onChange}>
        {children}
      </SelectOverlay>
      <CustomTrigger>
        {displayedValue}
        <Chevron id="chevron-down" size={24} />
      </CustomTrigger>
    </Wrapper>
  );
};

const Chevron = styled(Icon)`
  margin-left: 24px;
  color: currentColor;
`;

const Label = styled.label`
  -webkit-appearance: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectOverlay = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomTrigger = styled.div`
  display: flex;
  width: fit-content;
  padding: 12px 16px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  border-radius: 0.5em;
  font-weight: 400;
  font-family: Roboto, "sans-serif";
  color: ${COLORS.gray700};

  ${SelectOverlay}:focus + & {
    outline: 1px dotted #121212;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

export default Select;
