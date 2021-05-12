import { node, oneOf, string } from 'prop-types'
import styled from 'styled-components'

const StyledTypo = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`
const Heading1 = styled(StyledTypo)`
  font-size: 24px;
  font-weight: 700;
`
const Heading2 = styled(StyledTypo)`
  font-weight: 700;
  font-size: 18px;
`
const Heading3 = styled(StyledTypo)`
  font-weight: 500;
  font-size: 18px;
`
const Heading4 = styled(StyledTypo)`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`
const Paragraph = styled(StyledTypo)`
  font-size: 12px;
  font-weight: 400;
`

function Typography({ children, mode, tag, className }) {
  if (mode === 'h1') return <Heading1 as={tag || mode} className={className}>{children}</Heading1>
  if (mode === 'h2') return <Heading2 as={tag || mode} className={className}>{children}</Heading2>
  if (mode === 'h3') return <Heading3 as={tag || mode} className={className}>{children}</Heading3>
  if (mode === 'h4') return <Heading4 as={tag || mode} className={className}>{children}</Heading4>
  return <Paragraph className={className}>{children}</Paragraph>
}

Typography.propTypes = {
  children: node.isRequired,
  mode: oneOf(['h1', 'h2', 'h3', 'h4', 'p']),
  className: string,
  tag: string,
}

export default Typography