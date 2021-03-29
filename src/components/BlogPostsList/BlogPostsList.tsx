import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { BlogPostTile } from '../BlogPostTile/BlogPostTile';
import { IBlogPostTile } from '../../../types';

export const BlogPostsList = (): JSX.Element => {
  const data: {
    allMdx: {
      edges: {
        node: IBlogPostTile;
      }[];
    };
  } = useStaticQuery(graphql`
    query BlogPostsListQuery {
      allMdx(
        limit: 1000
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "/content/posts/" }
        }
        sort: { fields: [frontmatter___publishedTime], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 160)
            frontmatter {
              title
              slug
              publishedTime(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allMdx.edges.map(item => (
        <BlogPostTile
          key={item.node.frontmatter.slug}
          data={item.node}
        ></BlogPostTile>
      ))}
    </div>
  );
};
