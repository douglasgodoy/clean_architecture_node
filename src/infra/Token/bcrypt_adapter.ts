import { Hash } from '@domain/cryptography/hash';
import { HashComparer } from '@domain/cryptography/hash_comparer';
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hash, HashComparer {
    constructor(private readonly saltRound: number) { }

    async hash(plainText:string):Promise<string>  {
        return await bcrypt.hash(plainText, this.saltRound)
    }

    async compare(plainText:string, digest:string): Promise<boolean> {
        return await bcrypt.compare(plainText,digest)
    }
}