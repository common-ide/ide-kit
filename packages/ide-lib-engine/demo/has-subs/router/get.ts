import Router, {IRouter} from 'ette-router';
import {
  buildNormalResponse, getCStateMiddleware } from 'ide-lib-base-component';

import { IContext } from './helper';

export const router = new Router() as IRouter;

// 可以通过 filter 返回指定的属性值
// 比如 /nodes?filter=name,screenId ，返回的集合只有这两个属性
router.get('getModelInstance', '/model', function (ctx: IContext) {
  const { stores, request } = ctx;
  const { query } = request;
  const filterArray = query && query.filter && query.filter.trim().split(',');
  buildNormalResponse(ctx, 200, { attributes: stores.model.allAttibuteWithFilter(filterArray) });
});

// 获取 cstate 属性
router.get('getCState', '/model/cstate', getCStateMiddleware);
