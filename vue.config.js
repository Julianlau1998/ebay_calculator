module.exports = {
  pwa: {
    name: 'Fee Calculator for eBay (Gebührenrechner)',
    themeColor: '#000809',
    msTileColor: '#000809',
    backgroundColor: '#000809',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    workboxPluginMode: 'InjectManifest',
     workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  },
}
  