

const extraLibs = [
  'react-dnd',
  'react-dnd-html5-backend',
  {
    'ide-lib-utils': {
      commonjs: 'ide-lib-utils',
      commonjs2: 'ide-lib-utils',
      amd: 'ide-lib-utils',
      root: 'ideLibUtils',
    },
    'ide-lib-base-component': {
      commonjs: 'ide-lib-base-component',
      commonjs2: 'ide-lib-base-component',
      amd: 'ide-lib-base-component',
      root: 'ideBaseComponent',
    },
    'ide-model-utils': {
      commonjs: 'ide-model-utils',
      commonjs2: 'ide-model-utils',
      amd: 'ide-model-utils',
      root: 'ideModelUtils',
    },
    'ide-lib-engine': {
      commonjs: 'ide-lib-engine',
      commonjs2: 'ide-lib-engine',
      amd: 'ide-lib-engine',
      root: 'ideLibEngine',
    },
  },
];

module.exports = {
  extraLibs,
};
