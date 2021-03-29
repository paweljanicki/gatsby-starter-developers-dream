import React from 'react';
import * as styles from './Video.module.scss';

export const Video = ({ url }: { url: string }): JSX.Element => (
  <div className={styles.Container}>
    <iframe
      src={url}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen
    />
  </div>
);
