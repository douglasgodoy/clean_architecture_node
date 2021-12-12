import { Express, Router } from "express";
import routes from '@main/routes'
import RouterInterface from "@domain/routes";
import { HttpRequest, HttpResponse } from "@domain/Http";
import { middlewareRouter } from "@main/routes/middleware";

export const createRouter = (app: Express) => {
    const router = Router()
    router.use(middlewareRouter)
    app.use(router)

    app.post('/signin', routes.LoginController)
    app.get('/ping', (req: HttpRequest, res: HttpResponse) => res.send('pong'))


}