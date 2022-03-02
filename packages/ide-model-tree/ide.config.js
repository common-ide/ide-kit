const { extraLibs } = require('../../config-files/util');
module.exports = {
  name: 'ide-model-tree',
  debugName: 'model-tree',
  className: 'ModelTree',
  templater: 'https://github.com/common-ide/ide-tpl-component-for-monorepo.git',
  idPrefix: 'imt',
  configFileName: 'tsconfig.build.json',
  hasSubComponents: false,
  libName: 'ideModelTree',
  extraLibs,
  externals: [],
};
