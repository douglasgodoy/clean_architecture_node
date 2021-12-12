import { HttpRequest, HttpResponse } from "@domain/Http"

export const middlewareRouter = (req: HttpRequest, res: HttpResponse, next: () => void) => {
    console.log(`[${req.method} -> ${req.url} ] - ${new Date()}`);
    next()
}