import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default PageTemplate;
