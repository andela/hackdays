module.exports = {
  'globDirectory': 'dist/',
  "globPatterns": [
    "**/*.{txt,svg,png,ico,html,js,json,css}"
  ],
  'swDest': 'dist/sw.js',
  'navigateFallback': 'dist/index.html',
  'clientsClaim': true,
  'skipWaiting': true
}
