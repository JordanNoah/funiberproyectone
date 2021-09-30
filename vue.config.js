module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/josue.ubilla/vmoria'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
