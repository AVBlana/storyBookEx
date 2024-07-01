import styled, { css } from "styled-components";
import { AlertVariant } from "./Alert";

export const AlertContainer = styled.div<{
  variant: AlertVariant;
  noBorder: boolean;
}>`
  width: 100%;
  max-width: 350px;
  display: flex;
  padding: 10px 20px;
  border-radius: ${(props) => (props.noBorder ? "0px" : "20px")};
  ${(props) => {
    if (props.variant === AlertVariant.SUCCESS) {
      return css`
        background: green;
        color: #fff;
      `;
    }
    if (props.variant === AlertVariant.WARNING) {
      return css`
        background: yellow;
      `;
    }
    if (props.variant === AlertVariant.ERROR) {
      return css`
        background: red;
        color: #fff;
      `;
    }
  }}
`;

export const IconTextWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
`;
