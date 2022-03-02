import React, { useState } from 'react';
import {types} from 'mobx-state-tree';
import Chance from 'chance';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
    JSONModel,
    IJSONModel,
    createJSONInstance
} from '../src/';
import { Client } from 'ette';

const chance = new Chance();


const jsonObj = {
        a: chance.integer(),
        b: chance.string()
    };


export const Simple = () => {

  const m1 = createJSONInstance(jsonObj);
  const m2 = createJSONInstance(JSON.stringify(jsonObj));

  console.log(m1.value, m2.value);
  return <div>JSON Model</div>
}


export default {
  component: JSONModel,
  title: 'Components/JSONModel',
}
