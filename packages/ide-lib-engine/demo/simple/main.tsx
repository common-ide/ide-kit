import { Instance } from 'mobx-state-tree';
import { initSuitsFromConfig } from '../../src';

export * from './config';
export * from '.';
export * from './constant'

import { LibEngineCurrying } from '.';
import { configLibEngine } from './config';

const {
  ComponentModel: LibEngineModel,
  NormalComponent: LibEngine,
  ComponentHOC: LibEngineHOC,
  ComponentAddStore: LibEngineAddStore,
  ComponentFactory: LibEngineFactory,
  StoresModel: LibEngineStoresModel
} = initSuitsFromConfig(LibEngineCurrying, configLibEngine);

export {
  LibEngineModel,
  LibEngineStoresModel,
  LibEngine,
  LibEngineHOC,
  LibEngineAddStore,
  LibEngineFactory
};

export interface ILibEngineModel extends Instance<typeof LibEngineModel> {}
