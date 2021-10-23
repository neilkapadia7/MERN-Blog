import React, {useEffect} from 'react'
import { useHistory ,useLocation } from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/authActions'

const Header = (props) => {
  const user = useSelector(state => state.user);
  const {userInfo} = user;

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
      if(location.pathname === '/') {
        history.push('/discover')
      }
  }, [history, location])

  const dispatch = useDispatch();

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>Capital Setu</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="ml-auto">
              
                {userInfo ? (
                  <>
                    {/* <LinkContainer to='/'exact>
                      <Nav.Link>Discover</Nav.Link>
                    </LinkContainer> */}
                    
                    <NavDropdown title='Discover' id='category'>
                        <LinkContainer to='/discover/popular'>
                            <NavDropdown.Item>Popular</NavDropdown.Item>
                        </LinkContainer>  
                        <LinkContainer to='/discover/latest'>
                            <NavDropdown.Item>Latest</NavDropdown.Item>
                        </LinkContainer>  
                        <LinkContainer to='/discover/favourites'>
                            <NavDropdown.Item>Favourites</NavDropdown.Item>
                        </LinkContainer>  
                    </NavDropdown>

                    <Nav.Link onClick={() => 
                        dispatch(logout())
                    }>Logout</Nav.Link>
                    </>
                    ) : (
                  <>
                  <NavDropdown title='Discover' id='category'>
                    <LinkContainer to='/discover/popular'>
                        <NavDropdown.Item>Popular</NavDropdown.Item>
                    </LinkContainer>  
                    <LinkContainer to='/discover/latest'>
                        <NavDropdown.Item>Latest</NavDropdown.Item>
                    </LinkContainer>  
                    <LinkContainer to='/discover/favourites'>
                        <NavDropdown.Item>Favourites</NavDropdown.Item>
                    </LinkContainer>  
                  </NavDropdown>
                  <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                    </>
                )}

                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    )
}

export default Header
