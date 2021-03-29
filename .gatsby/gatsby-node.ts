import path from 'path';
import { GatsbyNode } from 'gatsby';

import { IFrontmatter } from '../types/frontmatter';
import { POSTS_PATH, PAGES_PATH, POSTS_PREFIX_PATH } from '../config';

const templates = {
  PostTemplate: path.resolve('./src/templates/PostTemplate/PostTemplate.tsx'),
  PageTemplate: path.resolve('./src/templates/PageTemplate/PageTemplate.tsx'),
  PageSidebarTemplate: path.resolve(
    './src/templates/PageSidebarTemplate/PageSidebarTemplate.tsx',
  ),
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const allMdxQuery: {
    errors?: any;
    data?: {
      allMdx: {
        edges: {
          node: {
            frontmatter: IFrontmatter;
            fileAbsolutePath: string;
          };
        }[];
      };
    };
  } = await graphql(
    `
      {
        allMdx(
          limit: 1000
          filter: { frontmatter: { published: { ne: false } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                template
              }
              fileAbsolutePath
            }
          }
        }
      }
    `,
  );

  if (allMdxQuery.errors) {
    return reporter.panic(allMdxQuery.errors);
  }

  const allMdxFiles = allMdxQuery.data.allMdx.edges;

  const posts = allMdxFiles.filter(item =>
    item.node.fileAbsolutePath.includes(POSTS_PATH),
  );

  const pages = allMdxFiles.filter(item =>
    item.node.fileAbsolutePath.includes(PAGES_PATH),
  );

  posts.forEach(post => {
    const component = post.node.frontmatter.template
      ? templates[post.node.frontmatter.template]
      : templates.PostTemplate;

    createPage({
      path: `${POSTS_PREFIX_PATH}/${post.node.frontmatter.slug}`,
      component,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });

  pages.forEach(page => {
    const component = page.node.frontmatter.template
      ? templates[page.node.frontmatter.template]
      : templates.PageTemplate;

    createPage({
      path: page.node.frontmatter.slug,
      component,
      context: {
        slug: page.node.frontmatter.slug,
      },
    });
  });
};
