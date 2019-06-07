const withTypescript = require('@zeit/next-typescript')
const withTM = require('next-transpile-modules')

module.exports = withTypescript(
  withTM({
    transpileModules: ['react-native-popup-menu'],
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web'
      }

      return config
    },
    distDir: '../dist/functions/next'
  })
)
