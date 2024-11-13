module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'removeDimensions',
    'cleanupAttrs',
    'removeXMLProcInst',
    'removeDimensions',
    'cleanupIds',
    'removeTitle',
    'removeUselessStrokeAndFill',
  ],
};
