import { Mongoose } from "mongoose";
 
export type MongooseConn = Mongoose

export interface Connect {
    connect(options: OptionsConnect): Promise<MongooseConn>
}

export interface OptionsConnect {
    bufferCommands?: boolean;
    dbName?: string;
    user?: string;
    pass?: string;
    autoIndex?: boolean;
    autoCreate?: boolean;
}