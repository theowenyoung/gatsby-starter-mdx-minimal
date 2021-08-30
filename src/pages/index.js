import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.fields.slug}>
              <a href={post.fields.slug}>{post.fields.slug}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx {
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
