import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useOktaAuth } from '@okta/okta-react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function NavbarComp() {

  const { authState, oktaAuth } = useOktaAuth();
  const logout = async () => {oktaAuth.signOut();oktaAuth.tokenManager.clear()};

  console.log('e', authState?.refreshToken)
  console.log(authState)
  return (
    <Navbar  sticky="top" className="bg-white shadow-sm mb-3">
      <Container className='d-flex justify-content-around'>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          
        </Nav>
        {authState?.isAuthenticated || authState?.refreshToken == null ? <Button onClick={() => logout()}>
            Logout
          </Button> : (null)}
      </Container>
    </Navbar>
  );
}
