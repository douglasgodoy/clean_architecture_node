import { Encrypt,Decrypt } from '@domain/cryptography/jwt'

import jwt from 'jsonwebtoken'

export default class JwtAdapter implements Encrypt, Decrypt {
    constructor(private readonly secret: string){}

    async encrypt(plainText:string): Promise<string>{
        return jwt.sign({id:plainText},this.secret)
    }

    async decrypt(token:string):Promise<string> {
        return jwt.verify(token, this.secret) as any
     }
}