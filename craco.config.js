const webpack = require("webpack");
// const bundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          // path: require.resolve("path-browserify"),
          // crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert/"),
          buffer: require.resolve("buffer/"),
          url: require.resolve("url/"),
          // util: require.resolve("util"),
        },
      },
      devtool: "source-map",
      output: {
        filename: "hyphen-widget.js",
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
        // new bundleAnalyzer({ analyzerMode: "server" }),
      ],
      ignoreWarnings: [{ message: /Failed to parse source map from/ }],
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false;
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins[5].options.filename = "[name].css";
          return webpackConfig;
        },
      },
      options: {},
    },
  ],
};
