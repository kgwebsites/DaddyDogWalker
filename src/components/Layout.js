import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import BG from './BG';
import Header from './header';
import './layout.css';

const StyledLayout = styled.div`
  .Layout__Body {
    margin: '0 auto';
    max-width: 960;
    position: 'relative';
    padding-top: calc(90vh - 75px);
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <BG />
        </div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Layout__Body">{children}</div>
      </StyledLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
