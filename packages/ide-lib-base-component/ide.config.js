const { extraLibs } = require('../../config-files/util');
module.exports = {
  name: 'ide-lib-base-component',
  debugName: 'lib-base-component',
  className: 'BaseComponent',
  templater: 'https://github.com/common-ide/ide-tpl-component-for-monorepo.git',
  idPrefix: 'slbc',
  libName: 'ideBaseComponent',
  configFileName: 'tsconfig.build.json',
  extraLibs: extraLibs,
  externals: [],
};
