import Koa from "koa";
import Router from "koa-router";
import AuthRouter from "./auth";

const router = new Router();

// Healthcheck Endpoint
router.get("/", async (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = "API is live.";
});

// Define Other routes here

// Auth routes middleware
router.use("/auth", AuthRouter.routes(), AuthRouter.allowedMethods());

export default router;
