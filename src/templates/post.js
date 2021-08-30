import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import React from "react";
const Post = (props) => {
  return (
    <MDXProvider>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </MDXProvider>
  );
};
export default Post;

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`;
