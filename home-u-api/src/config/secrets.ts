import dotenv from 'dotenv'

dotenv.config()

export const SESSION_SECRET = process.env.SESSION_SECRET

const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DATABASE = process.env.MONGO_DATABASE



export const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
