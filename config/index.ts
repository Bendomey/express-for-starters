import dotenv from 'dotenv';
import { name as applicationName } from '../package.json';

dotenv.config({});

export const CONFIG = {
    env: process.env.NODE_ENV ?? 'development',
    applicationName,
    port: Number(process.env.PORT ?? 5001),
};

export type ConfigType = typeof CONFIG;