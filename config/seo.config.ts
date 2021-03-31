import { BaseSeoProps } from 'gatsby-plugin-next-seo';

export const seoConfig: BaseSeoProps = {
  title: `Developers Dream`,
  description: `Amazing starter for creating a blog as a developer`,
  language: `en`,
  openGraph: {
    type: `website`,
    url: process.env.GATSBY_WEBSITE_URL,
    site_name: `Developers Dream`,
  },
};
