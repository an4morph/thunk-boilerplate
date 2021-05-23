import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import NotFound from './pages/NotFound'
import Theme from './styles/Theme'

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Theme>
  )
}

export default App
