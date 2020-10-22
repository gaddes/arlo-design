const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// This function will be called by Gatsby whenever a new node is created (or updated)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Add slugs for our Markdown pages to MarkdownRemark nodes
  if (node.internal.type === 'MarkdownRemark') {
    const basePath = 'blog';
    const slug = createFilePath({ node, getNode, basePath });
    createNodeField({
      node,
      name: 'slug',
      // Leading slash ensures path is absolute from root
      //  e.g. "arlodesign.ca/blog/page-title/"
      // and not relative to the page on which we clicked
      //  e.g. "arlodesign.ca/blog/blog/page-title/"
      //  e.g. "arlodesign.ca/another-page/blog/page-title/"
      value: `/${basePath}${slug}`,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Note: The graphql function call returns a Promise
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    });
  });
}