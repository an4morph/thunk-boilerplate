import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'
import GlobalStyle from './global'

const theme = {
  fonts: {
    primary: 'Open Sans, sans-serif',
  },
  colors: {
    text: '#2F2C2B',
    bg: '#FFFFFF',
    error: 'red',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
