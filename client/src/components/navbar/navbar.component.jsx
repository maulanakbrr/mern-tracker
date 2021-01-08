import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { BrandLink, NavMenu } from './navbar.styles';

const NavBar = () => {
  return(
    <Navbar collapseOnSelect expand="sm" className='justify-content-between bg-dark'>
      <Navbar.Brand >
        <BrandLink to='/' className='text-white'>
          TRACKER
        </BrandLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavMenu>
          <Link to='/user' className='nav-link text-white'>
            Create User
          </Link>
          <Link to='/create' className='nav-link text-white'>
            Create Exercise
          </Link>
        </NavMenu>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;