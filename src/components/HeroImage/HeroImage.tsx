import React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';

import * as styles from './HeroImage.module.scss';

export const HeroImage = ({
  image,
  title,
}: {
  image: any;
  title: string;
}): JSX.Element => {
  const basicImage = getImage(image);
  const bgImage = convertToBgImage(basicImage);

  return (
    <div className={styles.heroImageWrapper}>
      <BackgroundImage
        className={styles.heroImage}
        Tag="section"
        {...bgImage}
        preserveStackingContext
      >
        <h1 className={styles.title}>{title}</h1>
      </BackgroundImage>
    </div>
  );
};
