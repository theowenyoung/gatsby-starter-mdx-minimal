import React from "react";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug}>{post.fields.slug}</Link>
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
