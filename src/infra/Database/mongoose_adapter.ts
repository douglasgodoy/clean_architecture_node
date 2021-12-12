import { Connect, MongooseConn, OptionsConnect } from "@domain/database/mongoose";
import mongoose from "mongoose";

export default class mongooseAdapter implements Connect {
    constructor(private readonly uriDatabase: string) { }

    async connect(options?: OptionsConnect): Promise<MongooseConn> {
        return await mongoose.connect(this.uriDatabase, options)
    }

}