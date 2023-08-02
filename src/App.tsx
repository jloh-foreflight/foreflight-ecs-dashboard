import { Link, Route, Switch } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';

import { Home } from './pages/Home';
import { NavbarComp } from './components/NavbarComp';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <>
      <NavbarComp />
      <Container className="mb-4 ml-4">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <SecureRoute path="/converter" component={Converter} /> */}
          <Route path="/login/callback" component={LoginCallback} />
        </Switch>
      </Container>
    </>
  )
}

export default App
