const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (!webpackConfig.resolve.plugins) {
        webpackConfig.resolve.plugins = [];
      }
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
