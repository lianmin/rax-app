const chalk = require('chalk');
const { merge } = require('webpack-merge');

module.exports = function (config) {
  console.log(chalk.green('babel-plugin-fusion-mobile enabled'));

  const importConfig = [
    require.resolve('babel-plugin-import'),
    {
      libraryName: '@alifd/meet',
      libraryDirectory: 'lib',
    },
  ];

  config.module
    .rule('tsx')
    .use('babel-loader')
    .tap((opts) => {
      return merge(opts, {
        plugins: [importConfig],
      });
    });

  config.module
    .rule('jsx')
    .use('babel-loader')
    .tap((opts) => {
      return merge(opts, {
        plugins: [importConfig],
      });
    });
};
