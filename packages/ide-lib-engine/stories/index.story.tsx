import React, { useState } from 'react';
import {types} from 'mobx-state-tree';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LibEngine,
  LibEngineFactory,
  ILibEngineProps
} from '../demo/simple/main';
import { Client } from 'ette';


const {
  ComponentWithStore: LibEngineWithStore,
  client,
  stores: SimpleStores
} = LibEngineFactory();

const props: ILibEngineProps = {
  visible: true
};

function onClick(value: string) {
  console.log('当前点击：', value);
}

const onClickWithStore = (client: Client, isSimple = false) => (
  value: string,
  actionContext: any
) => {
  const { context } = actionContext;
  console.log('[onClick] action context:', context);

  client.put(`/model`, {
    name: 'text',
    value: `gggg${Math.random()}`.slice(0, 1 + 10 * Math.random())
  });

  isSimple &&
    console.log('stores.model.textLength: ', SimpleStores.model.textLength);
};


export const Simple = () => {
  return <LibEngine {...props} onClick={onClick} />
}

export const WithStore = () => {
  return  <LibEngineWithStore onClick={onClickWithStore(client, true)} />
}

export default {
  component: LibEngine,
  title: 'Components/LibEngine',
}  as ComponentMeta<typeof LibEngine>
