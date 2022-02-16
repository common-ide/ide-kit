import {
  updateInScope,
  BASE_CONTROLLED_KEYS,
  IBaseComponentProps,
  IAnyModelInstance
} from 'ide-lib-base-component';

import { capitalize, IPlainObject, omit } from 'ide-lib-utils';

import { IAnyModelType } from 'mobx-state-tree';

let mId = 1;
/**
 * 将普通对象转换成 Model
 * Store 初始化的时候也会间接调用该方法（通过 createEmptyModel 方法，往往需配置项 modelExtends ）
 * @param modelObject - 普通的对象
 */
export function createModel<Props extends IBaseComponentProps>(
  ComponentModel: IAnyModelType,
  modelObject: Props,
  // 使用 `_defaultProps` 对象，让 model 和 view 数据保持一致
  defaultProps: Props = (ComponentModel as any)['_defaultProps']
): IAnyModelInstance {
  const mergedProps = Object.assign({}, defaultProps || {}, modelObject);
  const { theme, styles, ...otherProps } = mergedProps;

  // 解决 JSONModel 中默认值不一致的问题
  const otherControlledKeyMap = (ComponentModel as any)[
    '_otherControlledKeyMap'
  ];

  const otherControlledKeys = Object.keys(otherControlledKeyMap || {});
  // let otherPropsForModel: IPlainObject = Object.assign({}, otherProps);

  // // 这里需要注意，如果 defaultProps 是 JSONModel 情况下的预处理
  // // 1. 将 otherProps 中的属性 pick 出 otherControlledKeyMap 所陈列的 key 值
  // if (otherControlledKeys.length) {
  //   otherPropsForModel = omit(otherProps, otherControlledKeys);
  // }

  // 先按这些 props 的值初始化 model
  const model = ComponentModel.create({
    id: `${ComponentModel.name}_${mId++}`,
    ...otherProps
  });
  model.setStyles(styles || {});
  model.setTheme(theme);

  // 单独将该特殊 keys 值进行自定义处理（通常搭配 modelExtends 配置使用）
  if (otherControlledKeys.length) {
    // 对于在 otherControlledKeyMap 中定义的 key，调用自定义 set 方法
    for (const subPropName in otherControlledKeyMap) {
      // 限定范围，在 otherProps 中
      if (
        otherControlledKeyMap.hasOwnProperty(subPropName) &&
        otherProps[subPropName]
      ) {
        model[`set${capitalize(subPropName)}`](otherProps[subPropName]);
      }
    }
  }

  return model;

}

/**
 * 创建新的空白
 */
export function createEmptyModel(ComponentModel: IAnyModelType) {
  return createModel(ComponentModel, {});
}

/* ----------------------------------------------------
    更新指定 enum 中的属性
----------------------------------------------------- */

// 定义 menu 可更新信息的属性

export const updateModelAttribute = (selfControlledKeys: string[]) => {
  const EDITABLE_ATTRIBUTE = BASE_CONTROLLED_KEYS.concat(selfControlledKeys);
  return updateInScope(EDITABLE_ATTRIBUTE);
};
