import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Disqus } from 'gatsby-plugin-disqus';

import { MainLayout } from '../../layouts';
import * as styles from './PageTemplate.module.scss';
import { SEO, HeroImage } from '../../components';
import { WEBSITE_URL, DEFAULT_AUTHOR } from '../../../config';
import { IDefaultSeoMeta } from '../../../types/seo';

interface IPageTemplateProps {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: {
      title: string;
      slug: string;
      description?: string;
      author?: string;
      heroImage?: any;
      cssClasses?: string;
      id?: string;
      comments?: boolean;
    };
  };
}

const PageTemplate = ({
  data: { mdx },
}: {
  data: IPageTemplateProps;
}): JSX.Element => {
  const url = `${WEBSITE_URL}/${mdx.frontmatter.slug}`;
  const seoConfig: IDefaultSeoMeta = {
    title: mdx.frontmatter.title,
    description: mdx.frontmatter.description || mdx.excerpt,
    author: mdx.frontmatter.author || DEFAULT_AUTHOR,
    url,
    image: ``,
  };
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
      <SEO config={seoConfig}></SEO>
      <main
        className={`${styles.main} ${
          mdx.frontmatter.cssClasses ? mdx.frontmatter.cssClasses : ``
        }`}
      >
        {!!mdx.frontmatter.heroImage ? (
          <HeroImage
            image={mdx.frontmatter.heroImage}
            title={mdx.frontmatter.title}
          ></HeroImage>
        ) : (
          <h1>{mdx.frontmatter.title}</h1>
        )}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {displayComments ? <Disqus config={disqusConfig} /> : ``}
      </main>
    </MainLayout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        slug
        description
        author
        heroImage {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        cssClasses
        id
        comments
      }
      body
    }
  }
`;
