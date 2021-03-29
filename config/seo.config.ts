import { BaseSeoProps } from 'gatsby-plugin-next-seo';
import { WEBSITE_URL } from '.';
/* eslint-disable @typescript-eslint/camelcase */

export const SeoConfig: BaseSeoProps = {
  title: `Developers Dream`,
  description: `Amazing starter for creating a blog as a developer`,
  language: `en`,
  openGraph: {
    type: `website`,
    url: WEBSITE_URL,
    site_name: `Developers Dream`,
    profile: {
      firstName: `Firstname`,
      lastName: `Lastname`,
    },
    article: {
      authors: [`Firstname Lastname`],
    },
  },
  twitter: {
    handle: `@pjanicki`,
    site: `@pjanicki`,
    cardType: `summary_large_image`,
  },
};

export const DEFAULT_AUTHOR = `Firstname Lastname`;
