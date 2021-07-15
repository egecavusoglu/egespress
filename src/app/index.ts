import Koa from 'koa';
import errorHandler from '../error-handler';
import timer from '../timer';
import router from '../routes';

// Init new koa application
const app = new Koa();

// Timing middleware (important that this is the first middleware to have more accurate measurements.)
app.use(timer);

// Error handling middleware
app.use(errorHandler);

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

export default app;
