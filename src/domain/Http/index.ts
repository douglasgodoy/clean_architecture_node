export interface HttpResponse {
    send: (payload: string | object) => void
}
export interface HttpRequest {
    body: object | undefined,
    url: string,
    method: string,
    baseUrl: string,
    params: object,
    query: object
}