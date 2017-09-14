var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  extractCSS: true,
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    require('postcss-apply')(),
    require('postcss-currentcolor')(),
    require('postcss-custom-properties')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-import')(),
    require('postcss-nesting')(),
    require('postcss-overflow-wrap')(),
    require('postcss-sorting')(),
    require('postcss-assets')({
      loadPaths: ['src/font/']
    })
  ]
}
