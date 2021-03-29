import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import pick from 'lodash/pick';

import { IDefaultSeoMeta } from '../../../types/seo';
import { DEFAULT_AUTHOR } from '../../../config/seo.config';

export const SEO = ({ config }: { config: IDefaultSeoMeta }): JSX.Element => {
  return (
    <GatsbySeo
      title={config.title}
      description={config.description}
      openGraph={{
        ...config,
        title: config.seoTitle || config.title,
        type: `article`,
        article: {
          ...pick(config, [`publishedTime`, `modifiedTime`, `tags`]),
          authors: [config.author || DEFAULT_AUTHOR],
        },
        images: [
          {
            url: ``,
            width: 600,
            height: 400,
            alt: ``,
          },
        ],
      }}
    />
  );
};
