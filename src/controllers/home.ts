import * as Router from "koa-router";
import {BaseContext} from "koa";

const router = new Router.default();

router.get('/', async function (ctx: BaseContext) {
  ctx.body = {"/": "success"};
});

router.get('/test', async function (ctx: BaseContext) {
  ctx.body = {"/test": "success"};
});

export default router;

