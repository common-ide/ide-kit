import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Client } from 'ette';

import { EdgeModel, VertexModel, GraphModel, IGraphModelSnapshot, IVertexModelSnapshot } from '../src';


export const Simple = () => {

  useEffect(() => {
    // side effects
    const graph = GraphModel.create({
        id: 'G'
    });

    const vertexA = VertexModel.create({
        id: "A"
    });
    const vertexB = VertexModel.create({
        id: "B"
    });

    graph
        .addVertex(vertexA)
        .addVertex(vertexB);

    console.log(222, graph.id, graph.isDirected);
    console.log(2223, graph.getVertexById(vertexA.id));
  }, []);
  return <div>Graph Model</div>
}


export default {
  component: GraphModel,
  title: 'Components/GraphModel',
}

