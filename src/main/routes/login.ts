import { HttpRequest, HttpResponse } from "@domain/Http"

export default (req:HttpRequest,res:HttpResponse):void => {
    console.log(`chegou`)
    res.send({error:false})
    
}