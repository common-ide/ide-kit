

// Export a function. Accept the base config as the only param.
module.exports = {
  addons: ['@storybook/addon-essentials'],
  // core: {
  //   builder: 'webpack5',
  // },
  stories: ['../packages/**/*.story.@(js|ts|tsx|mdx)'],
  webpackFinal: (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // const result = merge(config, {
    //   plugins: [
    //     new webpack.DefinePlugin({
    //     __VERSION__: '0.0.0',
    //     __PUBLIC_PATH__: '',
    //   })]
    // });

    // // Return the altered config
    // return result;

    // 获取原来定义的变量
    let definePluginId = config.plugins.findIndex(
      (p) => p.constructor.name === 'DefinePlugin',
    );
    const originPlugin = config.plugins[definePluginId];

    originPlugin.definitions = {
      ...originPlugin.definitions,
      __VERSION__: '"0.0.0"', // 必须要用两种引号，不然会报错。。。
      __PUBLIC_PATH__: '""',
    };

    const originTSPlugins = config.module.rules[0].use[0].options.plugins;
    // 将 reflect-meta 插件注入，不然会报错：https://stackoverflow.com/questions/52557878/babel-7-inversify-4-webpack-4-unexpected-character-on-inject
    originTSPlugins.unshift('babel-plugin-transform-typescript-metadata');

    return config;
  },
};
