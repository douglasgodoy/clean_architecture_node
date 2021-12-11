export interface Encrypt {
    encrypt: (plainText:string) => Promise<string>
}
export interface Decrypt {
    decrypt: (token:string) => Promise<string>
}