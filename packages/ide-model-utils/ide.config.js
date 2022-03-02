const { extraLibs } = require('../../config-files/util');
module.exports = {
  name: 'ide-model-utils',
  debugName: 'model-utils',
  className: 'ModelUtils',
  templater: 'https://github.com/common-ide/ide-tpl-component-for-monorepo.git',
  idPrefix: 'imu',
  hasSubComponents: false,
  libName: 'ideModelUtils',
  configFileName: 'tsconfig.build.json',
  extraLibs,
  externals: [],
};
