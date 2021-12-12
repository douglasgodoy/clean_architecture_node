import { Express,Router } from "express";
import  routes from '@main/routes'
import  RouterInterface from "@domain/routes";
import { HttpRequest, HttpResponse} from "@domain/Http";

export const createRouter = (app:Express) => {
    app.post('/signin', routes.LoginController)
    app.get('/ping', (req:HttpRequest,res:HttpResponse) => res.send('pong'))


}