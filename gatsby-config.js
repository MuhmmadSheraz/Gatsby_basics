module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gt2z1iv64oav`,
        accessToken: `R-fyDGrqZI76UGL8tUqh9Nc3sq79GWwyR6eVd3X7X_8`,
      },
    },
  ],
};
