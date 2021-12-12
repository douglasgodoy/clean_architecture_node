export default {
    port:process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'S3CR3TP4SS',
    uriDatabase: process.env.URI_DATABASE || 'mongodb://localhost:27017'
}