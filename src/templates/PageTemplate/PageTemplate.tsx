import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Disqus } from 'gatsby-plugin-disqus';

import { MainLayout } from '../../layouts';
import * as styles from './PageTemplate.module.scss';
import { SEO, HeroImage } from '../../components';

interface IPageTemplateProps {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: {
      title: string;
      slug: string;
      publishedTime: string;
      description?: string;
      author?: string;
      heroImage?: any;
      featuredImage?: any;
      cssClasses?: string;
      id?: string;
      comments?: boolean;
      featuredImageAlt?: string;
    };
  };
}

const PageTemplate = ({
  data: { mdx },
}: {
  data: IPageTemplateProps;
}): JSX.Element => {
  const url = `${process.env.GATSBY_WEBSITE_URL}${mdx.frontmatter.slug}`;
  const disqusConfig = {
    url: url,
    identifier: mdx.frontmatter.id,
    title: mdx.frontmatter.title,
  };
  const displayComments = mdx.frontmatter.comments && !!mdx.frontmatter.id;

  return (
    <MainLayout>
      <SEO
        frontmatter={mdx.frontmatter}
        excerpt={mdx.excerpt}
        type="website"
        url={url}
      ></SEO>
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
        {displayComments && <Disqus config={disqusConfig} />}
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
        publishedTime
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
        cssClasses
        id
        comments
        featuredImageAlt
      }
      body
    }
  }
`;
