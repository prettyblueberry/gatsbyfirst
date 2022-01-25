/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
      title: "My First Gatsby",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp"
  ],
}
