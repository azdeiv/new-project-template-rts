// styleguide.config.js

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/*.{jsx|tsx}',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
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
