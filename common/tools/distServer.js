const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const { chalkProcessing } = require('./chalkConfig');

/* eslint-disable no-console */
console.log(chalkProcessing('Opening production build...'));

browserSync({
  port: 4000,
  ui: {
    port: 4001,
  },
  server: {
    baseDir: 'dist',
  },

  files: [
    'src/*.html',
  ],

  middleware: [historyApiFallback()],
});
