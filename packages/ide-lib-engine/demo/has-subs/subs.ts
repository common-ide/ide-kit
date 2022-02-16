import {
  HeaderBar,
  HeaderBarStoresModel,
  HeaderBarAddStore,
  IHeaderBarProps,
  DEFAULT_PROPS as DEFAULT_PROPS_HEADER_BAR,
  HeaderBarFactory
} from '../demo-bar';
import { ValueOf } from 'ide-lib-base-component';

import { IComponentConfig } from '../../src';
import { showButtonConsole } from './solution';

// model + control: 枚举子属性
// export enum ESubApps {
//   headerBar = 'headerBar'
// }

// component: 子组件属性名

export interface ISubProps {
  headerBar?: IHeaderBarProps;
}

// component: 子组件属性列表
export const subComponents: Record<
  keyof ISubProps,
  IComponentConfig<ValueOf<ISubProps>, any>
> = {
  headerBar: {
    className: 'HeaderBar',
    namedAs: 'headerBar',
    defaultProps: DEFAULT_PROPS_HEADER_BAR,
    normal: HeaderBar,
    addStore: HeaderBarAddStore,
    storesModel: HeaderBarStoresModel,
    factory: HeaderBarFactory,
    solution: {
      onClickButton: [showButtonConsole]
    },
    routeScope: ['model'] // 能通过父组件访问到的路径
  }
};
