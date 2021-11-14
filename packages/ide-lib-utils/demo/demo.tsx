import * as React from 'react';
import { render } from 'react-dom';
import { loadLibUtilsWithDeps, TLibUtils } from '../src/index.dynamic';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

loadLibUtilsWithDeps().then((MainModule: TLibUtils) => {
  console.log('Module loaded: ', MainModule);

  const {
    LibUtils,
    LibUtilsFactory,
  } = MainModule;


  const { ComponentWithStore: LibUtilsWithStore, client } = LibUtilsFactory();

  function onClick(value: string) {
    console.log('当前点击：', value);
  }
  function onClickWithStore(value: string) {
    client.put(`/model`, {
      name: 'text',
      value: `gggg${Math.random()}`.slice(0, 8)
    });

  }

  const props: import('../src/').ILibUtilsProps = {
    visible: true
  };

  render(
    <Collapse defaultActiveKey={['1']}>
      <Panel header="普通组件" key="0">
        <LibUtils {...props} onClick={onClick} />
    </Panel>
      <Panel header="包含 store 功能" key="1">
        <LibUtilsWithStore onClick={onClickWithStore} />
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
});

