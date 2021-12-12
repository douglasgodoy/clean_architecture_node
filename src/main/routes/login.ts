import { HttpRequest, HttpResponse } from "@domain/Http"

export default (req:HttpRequest,res:HttpResponse):void => {
    res.send({error:false})
  
}