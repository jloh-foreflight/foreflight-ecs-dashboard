import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useOktaAuth } from '@okta/okta-react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function NavbarComp() {

  const { authState, oktaAuth } = useOktaAuth();
  console.log(authState)
  const logout = async () => {oktaAuth.signOut();oktaAuth.tokenManager.clear()}


  return (
    <Navbar  sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          {authState?.isAuthenticated ? <Button onClick={() => logout()}>
            Logout
          </Button> : (null)}
        </Nav>
      </Container>
    </Navbar>
  );
}
