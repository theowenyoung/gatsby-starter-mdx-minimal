const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    // Create slug
    const slug = createFilePath({ node, getNode, basePath: `` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    const nodes = res.data.allMdx.nodes;
    nodes.forEach((node) => {
      const slug = node.fields.slug;
      createPage({
        path: slug,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: slug,
        },
      });
    });
  });
};
