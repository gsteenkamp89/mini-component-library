/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, ...rest }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-label="progress bar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
      {...rest}
    >
      <VisuallyHidden>
        <label for="progressbar">Progress Bar</label>
      </VisuallyHidden>

      <BarWrapper size={size}>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const smallStyles = css`
  height: 8px;
  border-radius: 4px;
`;
const mediumStyles = css`
  height: 12px;
  border-radius: 4px;
`;

const largeStyles = css`
  height: 24px;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  ${(p) => p.size === "small" && smallStyles}
  ${(p) => p.size === "medium" && mediumStyles}
  ${(p) => p.size === "large" && largeStyles}
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: ${(p) => p.size === "large" && "4px solid transparent"};
  border-radius: inherit;
`;

const Bar = styled.span`
  background-color: ${COLORS.primary};
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: ${(p) => p.value}%;
`;

export default ProgressBar;
