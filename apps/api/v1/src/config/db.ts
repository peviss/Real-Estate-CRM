import mongoose from 'mongoose'
import logger from '../util/logger'
import { mongoURI } from './secrets'

export const dbConnection = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        logger.info("Success connecting DB")
    } catch (error) {
        logger.error(error)
    }
}