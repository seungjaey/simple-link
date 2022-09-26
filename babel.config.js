module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
        'preset-env': {
          useBuiltIns: 'usage',
          corejs: '3.19.1',
          targets: {
            ie: '11',
          },
        },
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin'],
};
