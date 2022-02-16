import * as React from 'react';
import { render } from 'react-dom';
import {
  LibEngine,
  LibEngineModel,
  LibEngineStoresModel,
  LibEngineFactory,
  ILibEngineProps
} from './simple/main';

import {
  HeaderBlock,
  HeaderBlockModel,
  HeaderBlockFactory,
  HeaderBlockStoresModel,
  IHeaderBlockProps
} from './has-subs/main';

import { Collapse } from 'antd';
import { Client } from 'ette';
import { IPlainObject } from 'ide-lib-utils';
const Panel = Collapse.Panel;

// console.log(
//   'LibEngineStoresModel:',
//   LibEngineStoresModel,
//   '\n HeaderBlockStoresModel:',
//   HeaderBlockStoresModel
// );

const {
  ComponentWithStore: LibEngineWithStore,
  client,
  stores: SimpleStores
} = LibEngineFactory();
const {
  ComponentWithStore: HeaderBlockWithStore,
  client: clientHeaderBlock
} = HeaderBlockFactory();

function onClick(value: string) {
  console.log('当前点击：', value);
}
const onClickWithStore = (client: Client, isSimple = false) => (
  value: string,
  actionContext: IPlainObject
) => {
  const { context } = actionContext;
  console.log('[onClick] action context:', context);

  client.put(`/model`, {
    name: 'text',
    value: `gggg${Math.random()}`.slice(0, 1 + 10 * Math.random())
  });

  console.log('stores.model.textLength: ', SimpleStores.model.textLength);
};


const onClickWithSubStore = (client: Client) => (
  value: string,
  actionContext: IPlainObject
) => {

  const { context } = actionContext;
  console.log('[onClick] action context:', context);

  client.put(`/model`, {
    name: 'text',
    value: `gggg${Math.random()}`.slice(0, 1 + 10 * Math.random())
  });

  // 测试 alias 路由
  client.put('/alias/blockbar', {
    name: 'logo',
    value: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'
  });


  // 测试深层 merge
    client
    .put('/model', {
      name: 'propsEditor',
      value: {
        formData: {
          a: Math.random(),
          b: 3
        },
        schema: { c: Math.random() }
      }
    })
    .then(() => {
      clientHeaderBlock.get('/model?filter=propsEditor').then((res: any) => {
        console.log(
          555,
          res.body.data.attributes.propsEditor.formData,
          res.body.data.attributes.propsEditor.schema
        );
      });
    });

}


const props: ILibEngineProps = {
  visible: true
};

render(
  <Collapse defaultActiveKey={['3']}>
    <Panel header="简单组件" key="0">
      <LibEngine {...props} onClick={onClick} />
    </Panel>
    <Panel header="简单组件 - 包含 store 功能" key="1">
      <LibEngineWithStore onClick={onClickWithStore(client)} />
    </Panel>
     <Panel header="含子组件" key="2">
      <HeaderBlock {...props} onClick={onClick} />
    </Panel>
    <Panel header="含子组件 - 包含 store 功能" key="3">
      <HeaderBlockWithStore onClick={onClickWithSubStore(clientHeaderBlock)} />
    </Panel>
  </Collapse>,
  document.getElementById('example') as HTMLElement
);

client.post('/model', {
  model: {
    visible: true,
    text: `text${Math.random()}`.slice(0, 8)
  }
});
