import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
  .Header__Container {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1rem;
    .Header__Title {
      margin: 0;
      font-size: 8vw;
      @media (min-width: 400px) {
        font-size: 2.25rem;
      }
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        span {
          margin-left: 12px;
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="Header__Container">
      <h1 className="Header__Title">
        <Link to="/">
          <Logo />
          <span>{siteTitle}</span>
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

export default Header;
