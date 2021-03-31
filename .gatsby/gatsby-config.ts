import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import dotenv from 'dotenv';

import { mainMenuItems, seoConfig, CONTENT_PATH } from '../config';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: ITSConfigFn<'config'> = ({ projectRoot }) => ({
  siteMetadata: {
    title: `Developers Dream`,
    description: `Amazing starter for creating a blog as a developer`,
    header: {
      menuItems: mainMenuItems,
    },
    footer: {
      menuItems: mainMenuItems,
    },
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        ...seoConfig,
        twitter: {
          handle: process.env.GATSBY_TWITTER_HANDLE || `@yourhandle`,
          site: process.env.GATSBY_TWITTER_SITE || `@yoursite`,
          cardType: `summary_large_image`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${projectRoot}${CONTENT_PATH}`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [`gatsby-remark-vscode`],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `frontwork`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `YOUR_GOOGLE_TAGMANAGER_ID`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
      },
    },
  ],
});

export default config;
