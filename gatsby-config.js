const autoprefixer = require("autoprefixer-stylus");

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Blog - Pathum Athukorala`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-stylus`,
      options: {
        use: [autoprefixer()]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ]
};
