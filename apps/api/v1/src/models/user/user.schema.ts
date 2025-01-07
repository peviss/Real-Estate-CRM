import { Schema, Document, model } from 'mongoose'
import IUser from './user.model'
import bcrypt from 'bcrypt'

export type UserDocument = Document<IUser> & {
    username: string
    password: string
    email: string
    phone: string

    name: {
        first: string
        last: string
    }
    image: {
        thumbnail: string
        mid: string
        full: string
    }
    role: string
    createdAt: string
    modifiedAt: string
    authenticate: (candidatePassword: string) => Promise<boolean>
};


const userSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        name: {
            first: {
                type: String,
                required: true
            },
            last: {
                type: String,
                required: true
            },
        },
        image: {
            thumbnail: String,
            mid: String,
            full: String,
        },
        role: {
            type: String,
            required: true
        },
        createdAt: {
            type: String,
            //default: Date.now()
        },
        modifiedAt: {
            type: String,
            default: Date.now()
        },
    }
)

userSchema.pre("save", async function (next: Function): Promise<void> {
    const user = this as UserDocument
    if (!user.isModified("password")) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods = {
    authenticate: async function(candidatePassword: string): Promise<boolean> {
        return bcrypt.compare(candidatePassword, (this as UserDocument).password);
    }
}

export default model<UserDocument>("User", userSchema)