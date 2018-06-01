// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/index': { page: '/' },
      '/basic-example': { page: '/basic-example' }
    }
  }
}