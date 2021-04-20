import { ObjectId } from 'mongodb'
import { CRUD } from '../../interfaces/crud.interface'
import IUser from '../../models/user/user.model'
import User from '../../models/user/user.schema'

class UserService implements CRUD {
    async create(user: IUser) {
        const newUser = new User(user)
        await newUser.save()
    }

    async list(query: any) {
        const users = await User.find(query).lean()
        return users
    }

    async login(email: string, password: string) {
        const userFound = await User.findOne({ email: email}).lean()
        return userFound
    }

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
