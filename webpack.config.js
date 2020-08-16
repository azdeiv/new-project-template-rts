const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new webpack.DefinePlugin({
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: '/path/to/public/dir',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: true,
      }),
      new TerserPlugin({
        terserOptions: {
          parse: {
            // Terser needs to parse ECMA 8 code.
            // However it shouldn't apply minifaction that will turn valid ECMA 5 code
            // into invalid ECMA 5 code. The 'compress' and 'output' property help with it.
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // eslint-disable-next-line @typescript-eslint/camelcase
            ascii_only: true,
          },
        },
        parallel: true, // use multi-process parallel running for faster build speed
        cache: true, // enable file caching
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new MiniCSSExtractPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: !isProd,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    descriptionFiles: ['package.json'],
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.scss',
      '.css',
      '.html',
      '.json',
    ],
    alias: {
      styles: path.resolve(__dirname, 'styles/'),
      components: path.resolve(__dirname, 'src/components/'),
      container: path.resolve(__dirname, 'src/components/container/'),
      presentation: path.resolve(__dirname, 'src/components/presentation/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[id].[hash:8].js',
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
  },
  devtool: !isProd ? 'cheap-module-eval-source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
};
