import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx: Koa.Context, next: Koa.Next) => {
    ctx.status = 200;
    ctx.body = 'Auth Endpoint';
});

export default router;
