module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.(js|ts|jsx|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
};
