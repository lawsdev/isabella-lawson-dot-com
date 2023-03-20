import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Auxlayout from '../../components/auxiliary/auxiliary'
// import Seo from '../../components/seo'

const postStyle = {
  backgroundColor: 'lightPink',
  padding: '20px',
};

const BlogPost = ({ data, children }) => {
  return (
    <Auxlayout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Auxlayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`


// export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost