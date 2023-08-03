import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';

import { Home } from './pages/Home';
import { NavbarComp } from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
// import Test from './pages/Test';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://okta.foreflight.com',
  clientId: '0oa6ouez89QNz8fyT697',
  // redirectUri: window.location.origin + '/authorization_code/callback'
  redirectUri: window.location.origin  + '/login/callback', 
  
});

// function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
//   // window.location.replace(
//   //   toRelativeUrl(originalUri || "/", window.location.origin)
//   // );
//   console.log(originalUri)
//   window.location.replace("/");
// }

function App() {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth:any, originalUri:any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>

      <NavbarComp />
      <Container className="mb-4 ml-4">
        {/* <Switch> */}
          {/* <SecureRoute path="/" exact={true} component={Test}/> */}
          <SecureRoute path="/" exact={true} component={Home} />
          {/* <SecureRoute path="/converter" component={Converter} /> */}
          <Route path="/login/callback" component={LoginCallback} />
        {/* </Switch> */}
      </Container>
      </Security>
    </>
  )
}

export default App
