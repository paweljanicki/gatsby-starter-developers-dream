import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Disqus } from 'gatsby-plugin-disqus';

import { MainLayout } from '../../layouts';
import * as styles from './PostTemplate.module.scss';
import { SEO } from '../../components';
import { POSTS_PREFIX_PATH } from '../../../config/site.config';

interface IPostTemplateProps {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: {
      slug: string;
      id: string;
      comments: boolean;
      title: string;
      description: string;
      seoTitle: string;
      publishedTime: string;
      modifiedTime: string;
      author: string;
      heroImage?: any;
      featuredImage?: any;
      featuredImageAlt?: string;
    };
  };
}

const PostTemplate = ({
  data: { mdx },
}: {
  data: IPostTemplateProps;
}): JSX.Element => {
  const url = `${process.env.GATSBY_WEBSITE_URL}/${POSTS_PREFIX_PATH}/${mdx.frontmatter.slug}`;
  const disqusConfig = {
    url: url,
    identifier: mdx.frontmatter.id,
    title: mdx.frontmatter.title,
  };
  const displayComments =
    (mdx.frontmatter.comments || mdx.frontmatter.comments === null) &&
    !!mdx.frontmatter.id;

  return (
    <MainLayout>
      <SEO
        frontmatter={mdx.frontmatter}
        excerpt={mdx.excerpt}
        type="article"
        url={url}
      ></SEO>
      <main className={styles.main}>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {displayComments && <Disqus config={disqusConfig} />}
      </main>
    </MainLayout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        slug
        description
        seoTitle
        publishedTime
        modifiedTime
        author
        comments
        id
        heroImage {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        featuredImageAlt
      }
      body
    }
  }
`;
