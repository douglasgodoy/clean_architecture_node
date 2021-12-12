export interface HttpResponse { 
    send:(payload: string | object) => void
}
export interface HttpRequest { 
    body:object,
}
