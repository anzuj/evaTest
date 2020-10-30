module.exports = {
    transpileDependencies:  ['vuetify', 'dotenv'],
    publicPath: process.env.NODE_ENV === 'production'
    ? '/evaTest/'
    : '/',
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'de',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
  }
