import React from "react";

import { StyleButton } from "./style";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <StyleButton onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default Button;
