import express, { Express } from 'express';
import { createRouter } from './routes';
export const startApp = async (): Promise<Express> => {
    const app: Express = express();
    createRouter(app)


    return app
}