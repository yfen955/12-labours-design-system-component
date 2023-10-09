const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.module.rule("images")
      .test(/\.(jpe?g|png|gif|svg)$/)
      .use('url-loader')
      .loader('url-loader').options({
        name: 'img/[name]_[hash:6].[ext]'
      })
  }
}
