import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import { LoginCallback, SecureRoute } from '@okta/okta-react';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container className="mb-4 ml-4">
      <Navbar />
      <Switch>
        <SecureRoute exact path="/" component={Home} />
        {/* <SecureRoute path="/converter" component={Converter} /> */}
        <Route path="/login/callback" component={LoginCallback} />
      </Switch>
    </Container>
  )
}

export default App
