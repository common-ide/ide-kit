import { IAnyModelType } from 'mobx-state-tree';
import { capitalize, IPlainObject } from 'ide-lib-utils';
export * from './propsEditor';

import { CONTROLLED_KEYS_PROPSEDITOR, PropsEditorModel } from './propsEditor';
export const otherControlledKeyMap: IPlainObject = {
  propsEditor: CONTROLLED_KEYS_PROPSEDITOR
};

export const modelExtends = (model: IAnyModelType) => {
  return model.actions(self => {
    return {
      setPropsEditor: (obj: any) => {
        self.propsEditor = PropsEditorModel.create({});
        for (const propName in obj) {
          if (obj.hasOwnProperty(propName)) {
            const fnName = `set${capitalize(propName)}`;
            if (self.propsEditor[fnName]) {
              self.propsEditor[fnName](obj[propName]);
            }
          }
        }
      }
    };
  });
};

export const mergeRule: IPlainObject = {
  propsEditor: { level: 2 }
};
