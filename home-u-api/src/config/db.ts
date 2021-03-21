import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27817/properties', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log(`[${new Date(Date.now()).toISOString()}][SUCCESS] - Database connected `)
    } catch (error) {
        console.log(`\u001b[1;31m[${new Date(Date.now()).toISOString()}][ERROR] - Database connection error : ${error.message}`)
    }
}