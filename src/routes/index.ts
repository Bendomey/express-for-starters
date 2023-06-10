import express from 'express';
import greeterRouter from './greeter';
import { createLogger } from '../utils/logger';
import { v4 as uuidV4 } from 'uuid';

const appRouter = express.Router();

appRouter.use((req, _, next) => {
  const requestID = uuidV4();
  const log = createLogger('AppRouter');

  log({
    requestID,
    url: req.url,
    params: req.params,
    query: req.query,
    body: req.body,
  });

  // TODO: Add support for requestID so that people can track requests.
  //   req.requestID = requestID;
  next();
});

appRouter.get('/', (_, res) =>
  res.status(200).json({ status: true, message: 'All Green' })
);

/**
 * @module Routes
 * @description This section should hold all routes registered.
 */
appRouter.use('/greeter', greeterRouter);

export default appRouter;
