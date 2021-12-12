import mongooseAdapter from "@infra/Database/mongoose_adapter";

export const mongoConnect = async (uri: string) => {
    return new mongooseAdapter(uri).connect()
}
