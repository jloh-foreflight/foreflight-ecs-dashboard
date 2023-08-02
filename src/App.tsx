import { Link, Route, Switch } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';

import { Home } from './pages/Home';
import { NavbarComp } from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
import Test from './pages/Test';


function App() {
  return (
    <>
      <NavbarComp />
      <Container className="mb-4 ml-4">
        {/* <Switch> */}
          <SecureRoute path="/" exact={true} component={Test}/>
          <SecureRoute path="/home" component={Home} />
          {/* <SecureRoute path="/converter" component={Converter} /> */}
          <Route path="/login/callback" component={LoginCallback} />
        {/* </Switch> */}
      </Container>
    </>
  )
}

export default App
