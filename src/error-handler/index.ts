import Koa from 'koa';
import { IApiError } from './ApiError';

/**
 * This is the global error handler for the server
 * @param ctx Context object
 * @param next Next function executed after this middleware
 */
const errorHandler = async (
    ctx: Koa.Context,
    next: Koa.Next
): Promise<void> => {
    try {
        await next();
    } catch (err: any) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message,
        };
    }
};

export default errorHandler;
