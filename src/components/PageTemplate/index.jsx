import { node, string } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const PageTemplate = ({ children, className }) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
)

PageTemplate.propTypes = {
  className: string,
  children: node,
}

export default PageTemplate
