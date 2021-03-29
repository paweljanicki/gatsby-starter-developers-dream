import React from 'react';

import {
  CODEPEN_PROFILE_URL,
  CODEPEN_USERNAME,
  CODEPEN_DEFAULT_HEIGHT,
  CODEPEN_DEFAULT_TITLE,
  CODEPEN_DEFAULT_TABS,
  CODEPEN_DEFAULT_THEME,
} from '../../../config';
import * as styles from './CodePen.module.scss';

export const CodePen = ({
  id,
  height = CODEPEN_DEFAULT_HEIGHT,
  title = CODEPEN_DEFAULT_TITLE,
  tabs = CODEPEN_DEFAULT_TABS,
  theme = CODEPEN_DEFAULT_THEME,
}: {
  id: string;
  height: number;
  title: string;
  tabs: string;
  theme: string;
}): JSX.Element => {
  const src = `${CODEPEN_PROFILE_URL}/embed/${id}?height=${height}&theme-id=${theme}&default-tab=${tabs}`;
  return (
    <div>
      <iframe
        className={styles.Iframe}
        height={height}
        scrolling="no"
        title={title ? title : ``}
        src={src}
        frameBorder="no"
      >
        See the Pen
        <a href={`${CODEPEN_PROFILE_URL}/pen/${id}`}>
          {title ? title : `on codepen`}
        </a>
        by <a href={CODEPEN_PROFILE_URL}>@{CODEPEN_USERNAME}</a>
      </iframe>
    </div>
  );
};
