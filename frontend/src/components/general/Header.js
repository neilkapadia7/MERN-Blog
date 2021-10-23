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

  const dispatch = useDispatch();

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>Applore Blog</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="ml-auto">
              
                {userInfo ? (
                  <>
                    <LinkContainer to='/'exact>
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    
                    {userInfo.isAdmin ?
                      (
                        <>
                          <LinkContainer to='/request'exact>
                            <Nav.Link>Requested Blogs</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to='/add-writer'exact>
                            <Nav.Link>Add Writer</Nav.Link>
                          </LinkContainer>
                        </>
                      )

                      : 
                      <LinkContainer to='/add-blog'exact>
                        <Nav.Link>Add Blog</Nav.Link>
                      </LinkContainer>
                    }

                    <Nav.Link onClick={() => {
                        dispatch(logout())
                        history.push('/login')
                      }  
                    }>Logout</Nav.Link>
                    </>
                    ) : (
                  <>
                  <LinkContainer to='/'exact>
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
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
