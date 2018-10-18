// this is a bit hacky
// it temporarily decorates the webpack config analyzation logic
// to let it collect bundle size and distribution related data in a file
// after the analyzation is done it opens the result in a web page for a visual representation
// run 'npm run analyze' to try it

process.env.NODE_ENV = 'production'
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const webpackConfigProd = require('react-scripts/config/webpack.config.prod')

webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'report.html'
  })
)

require('react-scripts/scripts/build')
