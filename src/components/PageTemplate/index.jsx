import { string } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const PageTemplate = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
}

PageTemplate.propTypes = {
  className: string
}

export default PageTemplate;
