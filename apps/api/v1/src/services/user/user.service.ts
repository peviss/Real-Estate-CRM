import { NextFunction, Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import { SESSION_SECRET } from "../../config/secrets";
import { JWT_EXPIRATION } from '../../config/settings'
import passport from 'passport'
import { IVerifyOptions } from 'passport-local'
import { CRUD } from '../../interfaces/crud.interface'
import IUser from '../../models/user/user.model'
import User, { UserDocument } from '../../models/user/user.schema'

class UserService implements CRUD {
    async create(user: IUser) {
        const newUser = new User(user)
        await newUser.save()
    }

    async list(query: any) {
        const users = await User.find(query).lean()
        return users
    }

    async auth(req: Request, res: Response, next: NextFunction) {
        passport.authenticate("local", (error: Error, user: UserDocument, info: IVerifyOptions) => {
            if (error) {
                throw error
            }
            if (!user) {
                return res.status(403).send(info)
            }
            console.log({ token: this.signToken(user) })

            const token = this.signToken(user)

            res.header('Authentication', token).json({token})

            
        })(req, res, next)
    }

    signToken(user: UserDocument): string {
        return jwt.sign(
            {
                email: user.email,
                //role: user.role
                password: user.password
            },
            SESSION_SECRET,
            {
                expiresIn: JWT_EXPIRATION,
                //subject: user.id
            }
        );
    };

    async find(id: string) {
        const userFound = await User.findOne({ id }).lean()
        return userFound
    }

    async update(User: IUser) {
        //TODO
    }

    async patch(resource: { id: string, patchData: object }) {
        const { id, patchData } = resource
        await User.findByIdAndUpdate(id, { $set: patchData })
    }

    async delete(id: string) {
        await User.deleteOne({ id }).lean()
    }


}

export default new UserService()
