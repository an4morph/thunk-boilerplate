import { string } from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
`;

const Button = ({ children, type = 'button', ...rest }) => {
  return (
    <StyledButton
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: string
}

export default Button;
