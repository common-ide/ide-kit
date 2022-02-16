// import { getValueByPath } from 'ide-lib-utils';
import type { IStoresEnv } from 'ide-lib-base-component';
import type { IStoresModel } from '../../../../src';
// import { RPATH } from '../../router/helper'

/**
 * 显示 list 列表项
 * @param env - IStoresEnv
 */
export const showConsole = (
  env: IStoresEnv<IStoresModel>,
  actionContext: { context: { [key: string]: any }}
) => async (key: string, keyPath: Array<string>, item: any) => {
  const { stores, client } = env;

  // 测试 context 的使用
  const { context } = actionContext;
  context.hello = 'world';
  // stores.model.setVisible(true); // 可见
};

export const afterShowConsole = (
  env: IStoresEnv<IStoresModel>,
  actionContext: { context: { [key: string]: any }}
) => async (key: string, keyPath: Array<string>, item: any) => {
  const { context } = actionContext;
  console.log(
    '[afterShowConsole] action context:',
    context
  );

  context.hello += '(after)';

  // stores.model.setVisible(true); // 可见
};
