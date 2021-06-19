import Koa from "koa";
import Router from "koa-router";
import errorHandler from "../error-handler";
import timer from "../timer";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = "API is live.";
});

// Timing middleware (important that this is the first middleware to have more accurate measurements.)
app.use(timer);

// Error handling middleware
app.use(errorHandler);

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

export default app;
