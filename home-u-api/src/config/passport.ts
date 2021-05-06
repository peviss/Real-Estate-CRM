import { Application } from 'express'
import passport from "passport";
import passportLocal from "passport-local";
import { NativeError } from "mongoose";
import User, { UserDocument } from '../models/user/user.schema'

const LocalStrategy = passportLocal.Strategy

passport.use(
    new LocalStrategy({ usernameField: "email", passwordField: "password" },
        async (email, password, done): Promise<void> => {
            try {
                const user = await User.findOne({ email: email.toLowerCase() });
                if (!user) {
                    return done(null, false, {
                        message: "Email not registered"
                    });
                }

                if (!(await user.authenticate(password))) {
                    return done(null, false, {
                        message: "Invalid credentials"
                    });
                }

                done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

export const setupPassport = (app: Application): void => {
    app.use(passport.initialize());
};