import { Schema, Document, model } from 'mongoose'
import IUser from './user.model'

const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    image: {
        thumbnail: String,
        mid: String,
        full: String,
    },
    role: { type: String, required: true },
    createdAt: { default: Date.now() },
    modifiedAt: { default: Date.now() },
})


export default model<IUser>("User", userSchema)