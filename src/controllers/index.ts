import Router from "koa-router";

import home from "./home";


const router = new Router();

router.use(home.routes(), home.allowedMethods());


export default router;