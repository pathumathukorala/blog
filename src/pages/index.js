import React from "react";
import Link from "gatsby-link";

import blogListStyles from "../assets/styles/modules/blog-list.module.styl";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { blog_list__container } = blogListStyles;

  return (
    <div className={blog_list__container}>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post;

        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>
              {frontmatter.excerpt}{" "}
              <Link to={frontmatter.path}>Read more...</Link>
            </p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default IndexPage;
