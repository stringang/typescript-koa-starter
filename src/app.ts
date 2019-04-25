import Koa from "koa";
import {BaseContext} from "koa";


// Controllers (route handlers)
import router from "./controllers";

// Create Koa server
const app = new Koa();

/**
 * Primary app routes.
 */
app.use(async (ctx: BaseContext, next: () => Promise<any>) => {
  await next();
});

app.use(router.routes());

export default app;
