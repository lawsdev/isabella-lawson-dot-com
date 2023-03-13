const path = require('path');

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        extensions: ['js'],
        alias: {
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@layouts': path.resolve(__dirname, 'src/components/layouts'),
        },
      },
    });
  };