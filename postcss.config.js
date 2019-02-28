module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['last 5 versions', 'iOS 7'] }), // 括号可写需要在哪个版本要自动添加前缀
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    }),
  ],
};
