import passport from "passport";
import passportLocal from "passport-local";
import { NativeError } from "mongoose";
import User, { UserDocument } from '../models/user/user.schema'

const LocalStrategy = passportLocal.Strategy

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err: NativeError, user: UserDocument) => {
            if (err) return done(err)
            if (!user) {
                return done(undefined, false, { message: `Email ${email} not found` })
            }
            user.authenticate(password, (err: Error, isMatch: boolean) => {
                if (err) return done(err)
                if (isMatch) {
                    return done(undefined, user)
                }
                return done(undefined, false, { message: "Invalid email or password" })
            })
        })
    })
)