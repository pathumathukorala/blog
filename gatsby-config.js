module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Blog - Pathum Athukorala`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ]
};
