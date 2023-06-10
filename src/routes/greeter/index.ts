import express from 'express';
import { ping } from '../../services/greeter';

const greeterRouter = express.Router();

/**
 * @module ServiceRoutes
 * @description This section holds all registered service routes..
 *
 * What should be in here:
 * 1. Validate params coming in.
 * > Note: You can get access to use client data from `req.params`, `req.body`, `req.query`.
 * 2. Call all your services for a registered route
 */

greeterRouter.get('/', (req, res) => {
  const response = ping();

  res.status(200).json({
    status: true,
    message: response,
  });
});

export default greeterRouter;
