import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Auxlayout from '../../components/auxiliary/auxiliary'
// import Seo from '../../components/layouts/seo'

const BlogPage = ({ data }) => {
  return (
    <Auxlayout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
                <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                </Link>
                </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Auxlayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

// export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage