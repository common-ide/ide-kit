

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
  },
];

module.exports = {
  extraLibs,
};
