import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from 'antd';
import { assetArray, BASEURL } from './deps';

import {capitalize, loadScriptsQueue, IScriptsLoadResult } from '../src/index';

console.log(888, capitalize('abc'));

let lastLoadResult: IScriptsLoadResult = {};

storiesOf('LibUtils', module).add('default', () => {

    // 点击按钮之后才进行加载
  const onClickLoadScript = () => {
    lastLoadResult = {}; // 清空

    loadScriptsQueue(assetArray, {
      baseUrl: BASEURL,
      lastLoadResult
    }).then(result => {
      console.log('load result: ', result);
    });
  };

  return <div>
      <button onClick={onClickLoadScript}>点击加载脚本</button>
    </div>
});
