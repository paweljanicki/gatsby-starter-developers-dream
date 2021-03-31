import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './TapBar.module.scss';
import { mainMenuItems } from '../../../../config';

export const TapBar = ({ className }: { className: string }): JSX.Element => (
  <div className={`${styles.TapBar} ${className}`}>
    <ul className={styles.Menu}>
      {mainMenuItems.map(item => (
        <li className={styles.MenuItem} key={item.label}>
          <Link
            className={styles.MenuItem_link}
            activeClassName={styles.MenuItem_link___active}
            to={item.path}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className={styles.MenuItem_link_label}>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
