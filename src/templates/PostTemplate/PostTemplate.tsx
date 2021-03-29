import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Disqus } from 'gatsby-plugin-disqus';

import { MainLayout } from '../../layouts';
import * as styles from './PostTemplate.module.scss';
import { SEO } from '../../components';
import { IDefaultSeoMeta } from '../../../types/seo';
import { POSTS_PREFIX_PATH, WEBSITE_URL } from '../../../config/site.config';

interface IPostTemplateProps {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: Omit<IDefaultSeoMeta, 'url'> & {
      slug: string;
      id: string;
      comments: boolean;
    };
  };
}

const PostTemplate = ({
  data: { mdx },
}: {
  data: IPostTemplateProps;
}): JSX.Element => {
  const url = `${WEBSITE_URL}/${POSTS_PREFIX_PATH}/${mdx.frontmatter.slug}`;
  const seoConfig: IDefaultSeoMeta = {
    ...mdx.frontmatter,
    description: mdx.frontmatter.description || mdx.excerpt,
    url,
    image: ``,
  };
  const disqusConfig = {
    url: url,
    identifier: mdx.frontmatter.id,
    title: mdx.frontmatter.title,
  };

  return (
    <MainLayout>
      <SEO config={seoConfig}></SEO>
      <main className={styles.main}>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {mdx.frontmatter.comments || mdx.frontmatter.comments === null ? (
          <Disqus config={disqusConfig} />
        ) : (
          ``
        )}
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
      }
      body
    }
  }
`;
