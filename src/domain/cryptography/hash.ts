export interface Hash {
    hash: (plainText:string, saltRounds: number) => Promise<string>
}