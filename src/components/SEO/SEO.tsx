import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import pick from 'lodash/pick';
import { getSrc } from 'gatsby-plugin-image';

import {
  IFrontmatter,
  BasicOpenGraphConfig,
  ArticleOpenGraphConfig,
} from '../../../types';

export const SEO = ({
  frontmatter,
  excerpt,
  type,
  url,
}: {
  frontmatter: IFrontmatter;
  excerpt: string;
  type: 'website' | 'article';
  url: string;
}): JSX.Element => {
  const defaultImageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const defaultImage = defaultImageQuery.file;
  const defaultImageSrc = getSrc(defaultImage);

  const defaultAuthor =
    process.env.GATSBY_DEFAULT_AUTHOR || `Firstname Lastname`;

  const image = frontmatter.featuredImage || frontmatter.heroImage;
  const imageSrc = getSrc(image);

  const basicConfig: BasicOpenGraphConfig = {
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.description || excerpt,
    url,
    type,
  };

  basicConfig.images = [
    {
      url: `${process.env.GATSBY_WEBSITE_URL}/${imageSrc || defaultImageSrc}`,
      width: imageSrc
        ? image.childImageSharp.gatsbyImageData.width
        : defaultImage.childImageSharp.gatsbyImageData.width,
      height: imageSrc
        ? image.childImageSharp.gatsbyImageData.height
        : defaultImage.childImageSharp.gatsbyImageData.height,
      alt: frontmatter.featuredImageAlt || ``,
    },
  ];

  const articleConfig: ArticleOpenGraphConfig = {
    ...basicConfig,
    article: {
      ...pick(frontmatter, [`publishedTime`, `modifiedTime`, `tags`]),
      authors: [frontmatter.author || defaultAuthor],
    },
  };

  return (
    <GatsbySeo
      title={basicConfig.title}
      description={basicConfig.description}
      openGraph={type === `website` ? basicConfig : articleConfig}
    />
  );
};
