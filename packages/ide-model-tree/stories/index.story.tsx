import React, { useState, useEffect } from 'react';
import {types} from 'mobx-state-tree';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
    initTreeModelFromJSON,
    ITreeModelSnapshot,
    TreeModel
} from '../src/';
import { Client } from 'ette';

export const Simple = () => {
  useEffect(() => {
    const model = initTreeModelFromJSON({
      id: 'A',
      name: 'rootNode',
      children: [
        {
          id: 'B',
          name: 'B-Node',
          children: [
            {
              id: 'D',
              name: 'D-Node'
            }
          ]
        },
        { id: 'C', name: 'C-Node' }
      ]
    });
    console.log(777, model.treeJSON, model.allNodes);


  }, []);

  return <div>Tree Model</div>
}


export default {
  component: TreeModel,
  title: 'Components/TreeModel',
}
