/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `IsabellaLawsonDotCom`,
    siteUrl: `https://www.isabellalawson.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Shippori Antique`,
          `Zen Kaku Gothic New`,
          `Limelight`
        ],
        display: "swap",
      },
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
    },
    __key: "images"
  }, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }
]
};