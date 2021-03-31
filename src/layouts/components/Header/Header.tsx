import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './Header.module.scss';
import { mainMenuItems, HeaderSocialMediaMenu } from '../../../../config';

export const Header = ({ className }: { className?: string }): JSX.Element => {
  const data: {
    site: {
      siteMetadata: { title: string };
    };
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={`${styles.Header} ${className ? className : ``}`}>
      <Link to="/" className="GhostLink">
        <h3 className={styles.SiteTitle}>{data.site.siteMetadata.title}</h3>
      </Link>
      <div className={styles.MenusSection}>
        <ul className={styles.Menu}>
          {mainMenuItems.map(item => (
            <li className={styles.MenuItem} key={item.label}>
              <Link
                className={`${styles.MenuItem_link} GhostLink`}
                activeClassName={styles.MenuItem_link___active}
                to={item.path}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.SocialMenu}>
          {HeaderSocialMediaMenu.map(item => (
            <li key={item.icon}>
              <a
                className={`${styles.SocialMenu_item} GhostLink`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={[`fab`, item.icon]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
