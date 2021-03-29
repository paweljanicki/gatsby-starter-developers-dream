import React from 'react';
import { Link } from 'gatsby';

import { IBlogPostTile } from '../../../types';
import { POSTS_PREFIX_PATH } from '../../../config/site.config';
import * as styles from './BlogPostTile.module.scss';

export const BlogPostTile = ({
  data,
}: {
  data: IBlogPostTile;
}): JSX.Element => (
  <Link
    className={`${styles.link} GhostLink`}
    to={`/${POSTS_PREFIX_PATH}/${data.frontmatter.slug}`}
  >
    <article className={styles.tile}>
      <h3 className={styles.title}>{data.frontmatter.title}</h3>
      <p>{data.excerpt}</p>
      <div className={styles.meta}>
        <span>{data.frontmatter.publishedTime}</span>
      </div>
    </article>
  </Link>
);
