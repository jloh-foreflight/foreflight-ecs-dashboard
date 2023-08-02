import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';


// @ts-ignore
import "bootstrap/dist/css/bootstrap.min.css"
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const oktaAuth = new OktaAuth({
//   issuer: `https://{yourOktaDomain}/oauth2/default`,
//   clientId: '{yourClientID}',
//   redirectUri: `${window.location.origin}/callback`,
// });
// const oktaAuth = new OktaAuth({
//   issuer: 'https://okta.foreflight.com/oauth2/default',
//   clientId: '0oa6ouez89QNz8fyT697',
//   // redirectUri: window.location.origin + '/authorization_code/callback'
//   redirectUri: 'https://main.d2uxbb190zvwy0.amplifyapp.com/login/callback'
// });
const oktaAuth = new OktaAuth({
  issuer: 'https://okta.foreflight.com',
  clientId: '0oa6ouez89QNz8fyT697',
  // redirectUri: window.location.origin + '/authorization_code/callback'
  redirectUri: 'https://ecs-dashboard.foreflight.com/login/callback'
});

function restoreOriginalUri(oktaAuth: OktaAuth, originalUri: string) {
  window.location.replace(
    toRelativeUrl(originalUri || "/", window.location.origin)
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Security>
  </React.StrictMode>,
  document.getElementById('root')
)
