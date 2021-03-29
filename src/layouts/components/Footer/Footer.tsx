import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import * as styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  const data: {
    site: {
      siteMetadata: { title: string };
    };
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <h5>{data.site.siteMetadata.title}</h5>
      </Link>
    </footer>
  );
};
