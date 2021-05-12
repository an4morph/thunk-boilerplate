import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
`;

const Button = ({ children, type, ...rest }) => {
  return (
    <StyledButton
      type={type || 'button'}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
