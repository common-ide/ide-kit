import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ILibEngineProps
} from '../demo/simple/main';

import {
  HeaderBlock,
  HeaderBlockModel,
  HeaderBlockFactory,
  HeaderBlockStoresModel,
  IHeaderBlockProps
} from '../demo/has-subs/main';

import { Client } from 'ette';


const {
  ComponentWithStore: HeaderBlockWithStore,
  client: clientHeaderBlock
} = HeaderBlockFactory();

const props: ILibEngineProps = {
  visible: true
};

function onClick(value: string) {
  console.log('当前点击：', value);
}

const onClickWithStore = (client: Client) => (
  value: string,
  actionContext: any
) => {
  const { context } = actionContext;
  console.log('[onClick] action context:', context);

  client.put(`/model`, {
    name: 'text',
    value: `gggg${Math.random()}`.slice(0, 1 + 10 * Math.random())
  });

  client.put('/alias/blockbar', {
    name: 'logo',
    value: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'
  });
};


export const HasSub = () => {
  return <HeaderBlock {...props} onClick={onClick} />
}

export const HasSubWithStore = () => {
  return <HeaderBlockWithStore onClick={onClickWithStore(clientHeaderBlock)} />
}

export default {
  component: HeaderBlock,
  title: 'Components/LibEngine',
}  as ComponentMeta<typeof HeaderBlock>
