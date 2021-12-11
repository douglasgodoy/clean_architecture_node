import express, {Express} from 'express';

export const startApp = async ():Promise<Express> => {
    return express();
}