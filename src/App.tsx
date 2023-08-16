import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';

import { Home } from './pages/Home';
import { NavbarComp } from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
import Test from './pages/Logout';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Logout from './pages/Logout';

const oktaAuth = new OktaAuth({
  issuer: 'https://okta.foreflight.com',
  clientId: '0oa6rb84ooKEUJKKT697',
  // redirectUri: window.location.origin + '/authorization_code/callback'
  redirectUri: 'https://ecs-dashboard.foreflight.com/login/callback/', 
  postLogoutRedirectUri: 'https://ecs-dashboard.foreflight.com/logout/callback'
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
          <Switch>
            {/* <SecureRoute path="/" exact={true} component={Test}/> */}
            <Route exact path="/" component={Home} />
            <Route path="/logout/callback" component={Logout} />
            {/* <SecureRoute path="/converter" component={Converter} /> */}
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </Container>
      </Security>
    </>
  )
}

export default App
