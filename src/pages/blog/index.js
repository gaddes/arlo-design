import React from 'react';
import { Link, graphql } from 'gatsby';

import { SEO } from '../../components';

export default function BlogLandingPage({ data }) {
  const numPosts = data.allMarkdownRemark.totalCount;
  const blogs = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO title="Blog" />
      <div>
        <h1>
          My cool blog
        </h1>
        <h4>{numPosts} Posts</h4>
        {blogs.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;