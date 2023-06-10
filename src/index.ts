import { createLogger } from './utils/logger';
import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error';
import { CONFIG } from '../config';
import appRouter from './routes';

export const startServer = async () => {
  const log = createLogger('main');

  log('Creating app....');
  const application = express();
  
  application.use(cors());
  application.use(express.json());

  log('Registering routes...');
  application.use('/api', appRouter);

  log('Registering error middleware...');
  application.use(errorMiddleware);

  application.listen(CONFIG.port, () => {
    log(`Starting app on http://localhost:${CONFIG.port}`);
  });
};

startServer().catch(console.error);
