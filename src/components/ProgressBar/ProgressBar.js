/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
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
  min-width: 370px;
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

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  left: 0;
  top: 0;
  width: ${(p) => p.value}%;
`;

export default ProgressBar;
