import React from "react";
import PropTypes from "prop-types";
import {
  AlertContainer,
  IconTextWrapper,
  IconWrapper,
  TextWrapper,
} from "./alert.style";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegTimesCircle,
} from "react-icons/fa";

export enum AlertVariant {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface AlertProps {
  variant: AlertVariant;
  message: string;
  noBorder: boolean;
  noShadow: boolean;
}

const Alert = ({
  variant = AlertVariant.SUCCESS,
  message,
  ...restProps
}: AlertProps) => {
  return (
    <AlertContainer variant={variant} {...restProps}>
      <IconTextWrapper>
        <IconWrapper>
          {variant === AlertVariant.SUCCESS && <FaCheckCircle />}
          {variant === AlertVariant.WARNING && <FaExclamationTriangle />}
          {variant === AlertVariant.ERROR && <FaRegTimesCircle />}
        </IconWrapper>
        <TextWrapper>
          <div className="message">{message}</div>
        </TextWrapper>
      </IconTextWrapper>
    </AlertContainer>
  );
};

export default Alert;
