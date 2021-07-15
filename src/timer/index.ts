import Koa from 'koa';

/**
 * Timer utility to log performance of the api routes.
 * @param ctx
 * @param next
 */
const timer = async (ctx: Koa.Context, next: Koa.Next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} took ${ms}ms`);
};

export default timer;
