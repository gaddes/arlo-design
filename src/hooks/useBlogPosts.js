import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              tags
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
  `);

  return data.allMarkdownRemark.edges;
};

export default useBlogPosts;
