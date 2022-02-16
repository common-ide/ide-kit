import Router, { IRouter } from 'ette-router';
import { buildNormalResponse } from 'ide-lib-base-component';
import { createModel } from '../../../../src';

import { IContext } from './helper';
import { HeaderBarModel } from '../../index';


export const router = new Router() as IRouter;

// 创新新的 model
router.post('createModel', '/model', function (ctx: IContext) {
  const { stores, request } = ctx;
  const { model } = request.data;

  stores.setModel(createModel(HeaderBarModel, model));

  buildNormalResponse(ctx, 200, { success: true });
});
