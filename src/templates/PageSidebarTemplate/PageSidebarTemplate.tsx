import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Disqus } from 'gatsby-plugin-disqus';

import { MainLayout } from '../../layouts';
import * as styles from './PageSidebarTemplate.module.scss';
import { SEO, HeroImage, widgets } from '../../components';
import { Widget } from '../../../types';

interface IPageSidebarTemplateProps {
  mdx: {
    body: string;
    excerpt: string;
    frontmatter: {
      title: string;
      slug: string;
      publishedTime: string;
      sidebar: Widget[];
      description?: string;
      author?: string;
      heroImage?: any;
      featuredImage?: any;
      featuredImageAlt?: string;
      cssClasses?: string;
      id?: string;
      comments?: boolean;
    };
  };
}

const PageSidebarTemplate = ({
  data: { mdx },
}: {
  data: IPageSidebarTemplateProps;
}): JSX.Element => {
  const url = `${process.env.GATSBY_WEBSITE_URL}/${mdx.frontmatter.slug}`;
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
        <section className={styles.content}>
          <article>
            <MDXRenderer>{mdx.body}</MDXRenderer>
            {displayComments && <Disqus config={disqusConfig} />}
          </article>
          <aside className={styles.sidebar}>
            {mdx.frontmatter.sidebar &&
              mdx.frontmatter.sidebar.map(item => {
                const widget = widgets[item];
                return <div key={item}>{widget()}</div>;
              })}
          </aside>
        </section>
      </main>
    </MainLayout>
  );
};

export default PageSidebarTemplate;

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
        featuredImageAlt
        cssClasses
        id
        comments
        sidebar
      }
      body
    }
  }
`;
