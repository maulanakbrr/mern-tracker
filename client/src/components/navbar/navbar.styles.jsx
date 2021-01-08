import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const BrandLink = styled(Link)`
  
  &:hover{
    text-decoration: none;
  }
`;

export const NavMenu = styled(Nav)`
  margin-left: auto;

  @media screen and (max-width: 767px) {
    margin-left: none;
  }
`;