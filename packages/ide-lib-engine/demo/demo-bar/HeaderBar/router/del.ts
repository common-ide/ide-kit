import Router, { IRouter } from 'ette-router';
import { buildNormalResponse } from 'ide-lib-base-component';

import { IContext } from './helper';

export const router = new Router() as IRouter;

// 移除操作
router.del('resetModel', '/model', function (ctx: IContext) {
  const { stores } = ctx;
  buildNormalResponse(ctx, 200, { node: stores.resetToEmpty()})
});
